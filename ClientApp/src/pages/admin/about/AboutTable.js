import React, { useState, Component } from 'react';
import { Button, Tooltip, Popconfirm, Table, Space, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import AboutForm from './AboutForm'
const { Column, ColumnGroup } = Table;


export class AboutTable extends Component {
    constructor(props) {

        super(props);
        this.state = {
            aboutList: [],
            loading: true,
            error: null,
            showModal: false,
            titleModal: 'Create',
            about: this.defaultFrom(),
        }
        this.GetData();
    }
    GetData() {
        fetch("/api/about")
            .then(response => response.json())
            .then(data => {
                this.setState({ aboutList: data, loading: false });
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
            aboutId: 0,
            aboutTitle: '',
            aboutContent: '',
            aboutIcon: '',
            aboutImage: ''
        }
    }

    confirmDelete(id) {
        fetch("/api/about/" + id, { method: "DELETE" })
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

                <Button type="primary" onClick={(e) => { this.setState({ showModal: true }); }}>Create Information</Button>

                <Table dataSource={this.state.aboutList} rowKey={(record) => record.aboutId} loading={this.state.loading}
                    onChange={this.handleTableChange}
                    columns={[
                        {
                            title: "Title",
                            dataIndex: "aboutTitle",
                            sorter: true,
                            defaultSortOrder: 'ascend',
                            sortDirections: ['ascend', 'descend', 'ascend'],
                        },
                        {
                            title: "Content",
                            dataIndex: "aboutContent",
                            render: (_, record) => <div dangerouslySetInnerHTML={{ __html: record.aboutContent }} />
                        },
                        {
                            title: "Icon",
                            dataIndex: "aboutIcon",
                            width: 300,
                            //render: (_, record) => <div dangerouslySetInnerHTML={{ __html: record.aboutIcon }} />
                        },
                        {
                            title: "Image",
                            dataIndex: "aboutImage",
                            width: 50,
                            render: (_, record) => <img src={`${record.aboutImage}`} style={{ width: 90 }} />
                        },
                        {
                            title: "",
                            render: (_, record) => (
                                <Space size="middle">
                                    <Tooltip title="Edit">
                                        <Button type="text" icon={<EditOutlined />} onClick={(e) => { this.setState({ about: record, showModal: true, titleModal: 'Edit' }); }} />
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <Popconfirm
                                            placement="left"
                                            title="Are you sure to delete this task?"
                                            onConfirm={(e) => { this.confirmDelete(record.aboutId); }}
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
                    <AboutForm onSuccess={() => {
                        message.success('Create/Edit Success');
                        this.GetData();
                        this.setState({
                            about: this.defaultFrom(),
                            showModal: false,
                        });

                    }} onCancel={() => {
                        this.setState({
                            about: this.defaultFrom(),
                            showModal: false,
                        });
                    }} title={this.state.titleModal} data={this.state.about} />
                }

            </>
        )
    }
}