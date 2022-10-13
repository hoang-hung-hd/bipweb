import * as React from 'react';
import { useState, Component } from 'react';
import { Button, Tooltip, Popconfirm, Table, Space, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import OurServiceForm from './ServiceForm'
const { Column, ColumnGroup } = Table;


export class OurServiceTable extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            ourServiceList: [],
            loading: true,
            error: null,
            showModal: false,
            titleModal: 'Create',
            ourService: this.defaultFrom(),
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
        fetch("/api/ourservice")
            .then(response => response.json())
            .then(data => {
                this.setState({ ourServiceList: data, loading: false });
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
            ourServiceId: 0,
            ourServiceTitle: '',
            ourServiceContent: '',
            ourServiceImage: ''
        }
    }

    confirmDelete(id) {
        fetch("/api/ourservice/" + id, { method: "DELETE" })
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

                <Button type="primary" onClick={(e) => { this.setState({ showModal: true }); }}>Create Service</Button>

                <Table dataSource={this.state.ourServiceList} rowKey={(record) => record.ourServiceId} loading={this.state.loading}
                    onChange={this.handleTableChange}
                    columns={[
                        {
                            title: "Title",
                            dataIndex: "ourServiceTitle",
                            width: 300,
                            defaultSortOrder: 'ascend',
                            sortDirections: ['ascend', 'descend', 'ascend'],
                        },
                        {
                            title: "Content",
                            dataIndex: "ourServiceContent",
                            render: (_, record) => <div dangerouslySetInnerHTML={{ __html: record.ourServiceContent }} />
                        },
                        {
                            title: "Image",
                            dataIndex: "ourServiceImage",
                            width: 50,
                            render: (_, record) => <img src={`${record.ourServiceImage}`} style={{ width: 120 }} />
                        },
                        {
                            title: "Action",
                            render: (_, record) => (
                                <Space size="middle">
                                    <Tooltip title="Edit">
                                        <Button type="text" icon={<EditOutlined />} onClick={(e) => { this.setState({ ourService: record, showModal: true, titleModal: 'Edit' }); }} />
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <Popconfirm
                                            placement="left"
                                            title="Are you sure to delete this task?"
                                            onConfirm={(e) => { this.confirmDelete(record.ourServiceId); }}
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
                {this.state.showModal === true &&
                    <OurServiceForm onSuccess={() => {
                        message.success('Create/Edit Success');
                        this.GetData();
                        this.setState({
                            ourService: this.defaultFrom(),
                            showModal: false,
                            titleModal: ''
                        });

                    }} onCancel={() => {
                        this.setState({
                            ourService: this.defaultFrom(),
                            showModal: false,
                            titleModal: ''
                        });
                    }} title={this.state.titleModal} data={this.state.ourService} />
                }

            </>
        )
    }
}