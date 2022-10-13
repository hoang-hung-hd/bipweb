import React, { useState, Component } from 'react';
import { Button, Tooltip, Popconfirm, Table, Space, message, Pagination, Input, Select, Form, Row, Col, Radio, ConfigProvider } from 'antd';
import qs from 'qs';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import ProductForm from './ProductForm'



const { Search } = Input;
const { Option } = Select;

const formItemLayout = {
    labelCol: { span: 16 },
    wrapperCol: { span: 16 }
};

const buttonItemLayout = {
    labelCol: { span: 16 },
    wrapperCol: { span: 16 }
};

export class ProductTable extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            productList: [],
            loading: true,
            error: null,
            showModal: false,
            titleModal: 'Create',
            product: this.defaultFrom(),
            locale:"",
            pagination: {
                current: 1,
                pageSize: 20,
                total: 0,
                showSizeChanger: true,
                pageSizeOptions: ['2', '20', '30'],
            },
            sortBy: 'productTitle',
            sortOrder:'ascend',
            searchString: null,
            lang:0
        }
        this.handleTableChange = this.handleTableChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.changeLang = this.changeLang.bind(this);
        
        this.GetData({
            searchString: this.state.searchString,
            lang: this.state.lang || 1,
            page: this.state.pagination.current,
            pageSize: this.state.pagination.pageSize,
            sortBy: this.state.sortBy,
            sortOrder: this.state.sortOrder
        });
    }

    GetData(params) {
        fetch(`/api/product?${qs.stringify(params)}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ productList: data.items, loading: false });    
                this.setState({
                    pagination: {
                        ...this.state.pagination,
                        current: params.page,
                        pageSize: params.pageSize,
                        total: data.total
                    },
                    sortBy: params.sortBy,
                    sortOrder: params.sortOrder,
                    searchString: params.searchString
                });  
            })
            .catch((error) => {
                this.setState({
                    loading: true,
                    error
                });
            });
    }
    handleTableChange(newPagination, filters, sorter) {       
        const sortOrder = sorter.order || "ascend";
        this.GetData({
            searchString: null,
            lang: this.state.lang || 1,
            page: newPagination.current,
            pageSize: newPagination.pageSize,
            sortBy: sorter.field,
            sortOrder: sortOrder
        })
    };

    changeLang(e) {
        console.log(e);
        this.setState({ lang: e })
        this.GetData({
            searchString: this.state.search,
            lang: e,
            page: this.state.pagination.current,
            pageSize: this.state.pagination.pageSize,
            sortBy: this.state.sortBy,
            sortOrder: this.state.sortOrder
        })
    }

    onSearch(data) {
        console.log(data)
        this.GetData({
            searchString: data.search,
            lang: this.state.lang,
            page: this.state.pagination.current,
            pageSize: this.state.pagination.pageSize,
            sortBy: this.state.sortBy,
            sortOrder: this.state.sortOrder
        })
    }

    

    defaultFrom() {
        return {
            productId: 0,
            productTitle: '',
            productDescription: '',
            categoryId: '',
            productImage: '',
            languageId:''
            
        }
    }

    confirmDelete(id) {
        console.log(this.state.lang)
        fetch("/api/product/" + id, { method: "DELETE" })
            .then(response => response.json())
            .then(
                
                this.GetData({
                    searchString: this.state.searchString,
                    lang: this.state.lang,
                    page: this.state.pagination.current,
                    pageSize: this.state.pagination.pageSize,
                    sortBy: this.state.sortBy,
                    sortOrder: this.state.sortOrder
                    }
                ),
                message.success('Delete success !!!')
            )
            .catch((error) => {
                this.setState({
                    loading: true,
                    error
                })
            });
        
    };




    render() {
        return (
            <>
                <Row>
                    <Select defaultValue={1} style={{ width: 120 }} onChange={this.changeLang}>
                        <Option value={1}>English</Option>
                        <Option value={2}>Japan</Option>
                    </Select>
                </Row>
                
                <Row>
                    <Col span={8}>
                        <Button type="primary" onClick={(e) => { this.setState({ showModal: true, titleModal: 'Create' }); }}>Create Product</Button>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={10}>
                        <Form onFinish={this.onSearch} >
                                    <Form.Item label='Search' name="search" {...formItemLayout}>
                                        <Input />
                                    </Form.Item>
                                    {/*<Search
                                placeholder="input search text"
                                allowClear
                                enterButton="Search"
                                size="middle"
                                onSearch={this.onSearch}
                            />*/}
                        </Form>
                    </Col>
                </Row>
                
                <Table dataSource={this.state.productList} rowKey={(record) => record.productId} loading={this.state.loading}
                    pagination={this.state.pagination}
                    sortDirections={["ascend", "descend"]}
                    onChange={this.handleTableChange}
                    columns={[
                        {
                            title: "Product Title",
                            dataIndex: "productTitle",
                            sorter: true,
                            defaultSortOrder: 'ascend',
                            sortDirections: ['ascend', 'descend', 'ascend'],
                        },
                        {
                            title: "Product Description",
                            dataIndex: "productDescription",
                            render: (_, record) => <div dangerouslySetInnerHTML={{ __html: record.productDescription }} />
                        },
                        {
                            title: "Category",
                            dataIndex: "categoryId",
                            sorter: true,
                            sortDirections: ['ascend', 'descend', 'ascend'],
                            render: (_, record) => record.category.categoryName
                        },
                        {
                            title: "Image",
                            dataIndex: "productImage",
                            width:50,
                            render: (_, record) => <img src={`${record.productImage}`} style={{ width: 90 }} />
                        },
                        {
                            title: "",
                            render: (_, record) => (
                                <Space size="middle">
                                    <Tooltip title="Edit">
                                        <Button type="text" icon={<EditOutlined />} onClick={(e) => { this.setState({ product: record, showModal: true, titleModal: 'Edit' }); }} />
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <Popconfirm
                                            placement="left"
                                            title="Are you sure to delete this task?"
                                            onConfirm={(e) => { this.confirmDelete(record.productId); }}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <DeleteOutlined />
                                        </Popconfirm>
                                    </Tooltip>
                                </Space>
                            ),
                        }
                    ]}
                >
                </Table>
                {this.state.showModal == true &&
                    <ProductForm onSuccess={() => {
                        message.success('Create/Edit Success');
                    this.GetData({
                        searchString: this.state.searchString,
                        lang: this.state.lang || 1,
                        page: this.state.pagination.current,
                        pageSize: this.state.pagination.pageSize,
                        sortBy: this.state.sortBy,
                        sortOrder: this.state.sortOrder
                    });
                        this.setState({
                            product: this.defaultFrom(),
                            showModal: false,
                            titleModal: ''
                        });

                    }} onCancel={() => {
                        this.setState({
                            product: this.defaultFrom(),
                            showModal: false,
                            titleModal: ''
                        });
                    }} title={this.state.titleModal} data={this.state.product} />
                }

            </>
        )
    }
}