import * as React from 'react';
import { Button, Alert, Modal, Form, Input, InputNumber, Select } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

class CategoryForm extends React.Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            isSubmitting: false,
            languageList:[],
            error: null
        }
        this.GetLanguageList();
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.formRef.current != null) {
            if (this.props.data != null) {
                this.formRef.current.setFieldsValue(this.props.data);
            }
        }
    }

    GetLanguageList() {
        fetch("/api/language")
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                this.setState({ languageList: data, loading: false });
            })
            .catch((error) => {
                this.setState({
                    loading: true,
                    error
                });
            });
    }

    onSubmit(e) {
        this.formRef.current.validateFields().then((values) => {
            console.log(values)
            var url = "";
            var method = "";
            if (values.categoryId > 0) {
                url = "/api/category/" + values.categoryId;
                method = "PUT";
            }
            else {
                url = "/api/category";
                method = "POST";
            }
            this.setState({
                isSubmitting: true,
                error: null
            });
            fetch(url, {
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(response => {
                    this.setState({
                        isSubmitting: false
                    });
                    if (response.status == 200) {
                        this.props.onSuccess()
                    }
                    else {
                        response.json().then(data => {
                            var err = ''
                            if (data.errors) {
                                for (let key in data.errors) {
                                    if (data.errors.hasOwnProperty(key)) {
                                        err += `${key}: ${data.errors[key]}` + `\t`
                                    }
                                }
                            }
                            this.setState({
                                error: err || data.statusText || data.title
                            });
                        })
                    }
                })
                .catch((error) => {
                    this.setState({
                        isSubmitting: false,
                        error: error
                    });
                });
        }).catch((error) => {
            this.setState({
                isSubmitting: false
            });
        })
    }
    render() {
        return (
            <Modal title={this.props.title} open={true}
                onCancel={this.props.onCancel}
                forceRender
                footer={[
                    <Button key="back" onClick={this.props.onCancel}>
                        Bỏ qua
                    </Button>,
                    <Button key="submit" type="primary" loading={this.state.isSubmitting} onClick={this.onSubmit}>
                        Lưu
                    </Button>
                ]}>
                <Form ref={this.formRef}
                    name="control-ref"
                    layout="vertical"
                    autoComplete="off">
                    {this.state.error != null &&
                        <Alert message={this.state.error} type="error" />
                    }
                    <Form.Item hidden name="categoryId">
                        <Input type="hidden" />
                    </Form.Item>
                    <Form.Item label="Category Name" name="categoryName" rules={[{ required: true, message: 'Please input the category name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Language" name="languageId" rules={[{ required: true, message: 'Please input the content!' }]}>
                        <Select style={{ width: 200 }}>
                            {this.state.languageList.map((language) => (
                                <Option key={language.languageId} value={language.languageId}>{language.languageName}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}
export default CategoryForm;
