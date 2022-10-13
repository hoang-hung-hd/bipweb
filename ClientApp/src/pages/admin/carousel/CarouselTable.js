import React, { useState, Component } from 'react';
import { Button, Tooltip, Popconfirm, Table, Space, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import CarouselForm from './CarouselForm'
const { Column, ColumnGroup } = Table;


export class CarouselTable extends Component {
    constructor(props) {

        super(props);
        this.state = {
            carouselList: [],
            loading: true,
            error: null,
            showModal: false,
            titleModal: 'Create',
            carousel: this.defaultFrom(),
            tableParams: {
                pagination: {
                    current: 1,
                    pageSize: 10,
                    total: 200,
                }
            }
        }
        this.GetData();
    }
    GetData() {
        fetch("/api/carousel")
            .then(response => response.json())
            .then(data => {
                this.setState({ carouselList: data, loading: false });
            })
            .catch((error) => {
                this.setState({
                    loading: true,
                    error
                });
            });
    }

    /*handleTableChange(pagination, filters, sorter) {
        console.log(1)
    };*/

    defaultFrom() {
        return {
            carouselId: 0,
            carouselTitle: '',
            carouselContent: '',
            carouselImage:'',
        }
    }

    confirmDelete(id) {
        fetch("/api/carousel/" + id, { method: "DELETE" })
            .then(response => response.json())
            .then(
                this.GetData()
            )
            .catch((error) => {
                this.setState({
                    loading: true,
                    error
                });
            });
        message.success('Delete success !!!');
    };


    render() {
        return (
            <>

                <Button type="primary" onClick={(e) => { this.setState({ showModal: true }); }}>Create Carousel</Button>

                <Table dataSource={this.state.carouselList} rowKey={(record) => record.carouselId} loading={this.state.loading}
                    onChange={this.handleTableChange}
                    columns={[
                        {
                            title: "Title",
                            dataIndex: "carouselTitle",
                            width: 300,
                            defaultSortOrder: 'ascend',
                            sortDirections: ['ascend', 'descend', 'ascend'],
                        },
                        {
                            title: "Content",
                            dataIndex: "carouselContent",
                            render: (_, record) => <div dangerouslySetInnerHTML={{ __html: record.carouselContent }} />
                        },
                        {
                            title: "Image",
                            dataIndex: "carouselImage",
                            width: 50,
                            render: (_, record) => <img src={`${record.carouselImage}`} style={{ width: 120 }} />
                        },
                        {
                            title: "Action",
                            render: (_, record) => (
                                <Space size="middle">
                                    <Tooltip title="Edit">
                                        <Button type="text" icon={<EditOutlined />} onClick={(e) => { this.setState({ carousel: record, showModal: true, titleModal: 'Edit' }); }} />
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <Popconfirm
                                            placement="left"
                                            title="Are you sure to delete this task?"
                                            onConfirm={(e) => { this.confirmDelete(record.carouselId); }}
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
                    <CarouselForm onSuccess={() => {
                        message.success('Create/Edit Success');
                        this.GetData();
                        this.setState({
                            carousel: this.defaultFrom(),
                            showModal: false,
                            titleModal: ''
                        });

                    }} onCancel={() => {
                        this.setState({
                            carousel: this.defaultFrom(),
                            showModal: false,
                            titleModal: ''
                        });
                    }} title={this.state.titleModal} data={this.state.carousel} />
                }

            </>
        )
    }
}