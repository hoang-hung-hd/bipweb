import * as React from 'react';
import { Button, Alert, Modal, Form, Input, InputNumber, Upload, Select } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

const { Option } = Select;


class ProductForm extends React.Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
            fileList: [],
            languageList:[],
            isSubmitting: false,
            error: null,
            convertedText: ""
        }

        this.GetLanguageList();
        this.GetCategoryList();
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.formRef.current != null) {
            if (this.props.data != null) {
                if (this.props.data.productImage.length > 0) {
                    this.setState({
                        fileList: [
                            {
                                url: this.props.data.productImage,
                            },
                        ]
                    })
                }
                this.setState({ convertedText: this.props.productDescription })
                this.formRef.current.setFieldsValue(this.props.data);
            }
        }
    }
    GetCategoryList() {
        fetch("/api/category")
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                this.setState({ categoryList: data, loading: false });
            })
            .catch((error) => {
                this.setState({
                    loading: true,
                    error
                });
            });
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
    onChange(e) {
           this.setState({ fileList: e.fileList }) 
    }

    onSubmit(e) {
        this.formRef.current.validateFields().then((values) => {
            var url = "";
            var method = "";
            if (values.productId > 0) {
                url = "/api/product/" + values.productId;
                method = "PUT";
            }
            else {
                url = "/api/product";
                method = "POST";
            }
            this.setState({
                isSubmitting: true,
                error: null
            });
            var form_data = new FormData();
            if (this.state.fileList.length > 0 && this.state.fileList[0].originFileObj)
                form_data.append("File", this.state.fileList[0].originFileObj);

            for (var key in values) {
                form_data.append(key, values[key]);
            }
            /*for (var pair of form_data.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }*/
            fetch(url, {
                method: method,
                body: form_data
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
                    <Form.Item hidden name="productId">
                        <Input type="hidden" />
                    </Form.Item>
                    <Form.Item label="Product Title" name="productTitle" rules={[{ required: true, message: 'Please input the  title!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Product Description" name="productDescription" rules={[{ required: true, message: 'Please input the icon!' }]}>
                        <ReactQuill
                            theme='snow'
                            value={this.state.convertedText}
                            style={{ minHeight: '150px' }}
                        />
                    </Form.Item>
                    <Form.Item label="Category" name="categoryId" rules={[{ required: true, message: 'Please input the content!' }]}>
                        <Select style={{ width: 200 }}>
                            {this.state.categoryList.map((category) => (
                                <Option key={category.categoryId} value={category.categoryId}>{category.categoryName}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Language" name="languageId" rules={[{ required: true, message: 'Please input the content!' }]}>
                        <Select style={{ width: 200 }}>
                            {this.state.languageList.map((language) => (
                                <Option key={language.languageId} value={language.languageId}>{language.languageName}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Upload" valuePropName="file">
                        <Upload action="/api/product/storeFile"
                            listType="picture-card"
                            fileList={this.state.fileList}
                            onChange={(e) => { this.onChange(e) }}
                            beforeUpload={() => false}
                            maxCount="1"
                        >
                        {/*<Upload fileList={this.state.fileList} getValueFromEvent={this.getFile()}*/}
                        {/*    onChange={(e) => { this.handleUpload(this.state.fileList) }}*/}
                        {/*    beforeUpload={() => false} listType="picture-card">*/}
                            <div>
                                <PlusOutlined />
                                <div
                                    style={{
                                        marginTop: 8,
                                    }}
                                >
                                    Upload
                                </div>
                            </div>
                        </Upload>
                    </Form.Item>
                    

                </Form>
            </Modal>
        )
    }
}
export default ProductForm;
