import React, { useState, Component } from 'react';
import { Button, Tooltip, Popconfirm, Table, Space, message, Modal, Form, Input, useForm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import  CategoryForm from './CategoryForm';
const { Column, ColumnGroup } = Table;

export class CategoryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorytList: [],
            loading: true,
            error: null,
            showModal: false,
            titleModal: 'Create',
            cat: this.defaultFrom()
        }
        this.GetData();
    }
    GetData() {
        fetch("/api/category")
            .then(response => response.json())
            .then(data => {
                this.setState({ categorytList: data, loading: false });
            })
            .catch((error) => {
                this.setState({
                    loading: true,
                    error
                });
            });
    }
    defaultFrom() {
        return {
            categoryId: 0,
            categoryName: '',
        }
    }
    confirmDelete(id) {
        fetch("/api/category/" + id, { method: "DELETE" })
            .then(response => {
                if (response.status == 200)
                    this.GetData()
            })
            //.then(data => {
            //    console.log(data)
            //    this.GetData()
            //}   
            .catch((error) => {
                this.setState({
                    loading: true,
                    error
                });
            });
        message.success('Delete success ')
    };

    render() {
        return (
            <>
                <Button type="primary" onClick={(e) => { this.setState({ showModal: true }); }}>Create Category</Button>
                <Table dataSource={this.state.categorytList} rowKey={(record) => record.categoryId} loading={this.state.loading} >
                    <Column title="Id" dataIndex="categoryId" key="categoryId" />
                    <Column title="Category Name" dataIndex="categoryName" key="categoryName" />
                    <Column
                        title=""
                        key="action"
                        render={(_, record) => (
                            <Space size="middle">
                                <Tooltip title="Edit">
                                    <Button type="text" icon={<EditOutlined />} onClick={(e) => { this.setState({ cat: record, showModal: true, titleModal: 'Edit' }); }} />
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <Popconfirm
                                        placement="left"
                                        title="Are you sure to delete this task?"
                                        onConfirm={(e) => { this.confirmDelete(record.categoryId); }}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <DeleteOutlined />
                                    </Popconfirm>
                                </Tooltip>
                            </Space>
                        )}
                    />
                </Table>
                {this.state.showModal == true &&
                    <CategoryForm onSuccess={() => {
                        message.success('Create/Edit Success');
                        this.GetData();
                        this.setState({
                            cat: this.defaultFrom(),
                            showModal: false,
                            titleModal: ''
                        });

                        }} onCancel={() => {
                            this.setState({
                                cat: this.defaultFrom(),
                                showModal: false,
                                titleModal: ''
                            });
                        }} title={this.state.titleModal} data={this.state.cat}
                    />
                }
                
            </>
        );
    }

}