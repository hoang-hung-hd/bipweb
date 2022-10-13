import React, { useState, Component } from 'react';
import { Button, Tooltip, Popconfirm, Table, Space, message, Modal, Form, Input, useForm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
const { Column, ColumnGroup } = Table;

export class ContactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [],
            loading: true,
            error: null,
        }
        this.GetData();
    }
    GetData() {
        fetch("/api/contact")
            .then(response => response.json())
            .then(data => {
                this.setState({ contactList: data, loading: false });
            })
            .catch((error) => {
                this.setState({
                    loading: true,
                    error
                });
            });
    }
    render() {
        return (
            <Table dataSource={this.state.contactList} rowKey={(record) => record.contactId} loading={this.state.loading} >
                <Column title="Customer Name" dataIndex="contactName" key="contactName" />
                <Column title="Email" dataIndex="contactEmail" key="contactEmail" />
                <Column title="Subject" dataIndex="contactSubject" key="contactSubject" />
                <Column title="Message" dataIndex="contactMessage" key="contactMessage" />
            </Table>
        );
    }

}