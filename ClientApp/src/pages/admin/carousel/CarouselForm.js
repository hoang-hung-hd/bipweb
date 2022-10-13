import * as React from 'react';
import { Button, Alert, Modal, Form, Input, InputNumber, Upload } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
//import 'rc-editor-core/assets/index.css';
//import 'rc-select/assets/index.css';
//import { EditorCore, GetHTML } from 'rc-editor-core';

class CarouselForm extends React.Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            fileList: [],
            isSubmitting: false,
            error: null,
            convertedText: "",
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.formRef.current != null) {
            if (this.props.data != null) {
                if (this.props.data.carouselImage.length > 0) {
                    this.setState({
                        fileList: [
                            {
                                url: this.props.data.carouselImage,
                            },
                        ]
                    })
                }
                this.setState({ convertedText: this.props.carouselContent })
                this.formRef.current.setFieldsValue(this.props.data);
            }
        }
    }
    onChange(e) {
        this.setState({ fileList: e.fileList })
    }

    onSubmit(e) {
        this.formRef.current.validateFields().then((values) => {
            console.log(values);
            var url = "";
            var method = "";
            if (values.carouselId > 0) {
                url = "/api/carousel/" + values.carouselId;
                method = "PUT";
            }
            else {
                url = "/api/carousel";
                method = "POST";
            }
            this.setState({
                isSubmitting: true,
                error: null
            });
            var form_data = new FormData();
            if (this.state.fileList.length > 0 && this.state.fileList[0].originFileObj)
                form_data.append("file", this.state.fileList[0].originFileObj);

            for (var key in values) {
                form_data.append(key, values[key]);
            }
            console.log(form_data)
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
                    <Form.Item hidden name="carouselId">
                        <Input type="hidden" />
                    </Form.Item>
                    <Form.Item label="Title" name="carouselTitle" rules={[{ required: true, message: 'Please input the  title!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Upload" valuePropName="file">
                        <Upload action="/api/carousel/storeFile"
                            listType="picture-card"
                            fileList={this.state.fileList}
                            onChange={(e) => { this.onChange(e) }}
                            beforeUpload={() => false}
                            maxCount="1"
                        >
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
                    <Form.Item label="Carousel Content" name="carouselContent" rules={[{ required: true, message: 'Please input the icon!' }]}>
                        <ReactQuill
                            theme='snow'
                            value={this.state.convertedText}
                            style={{ minHeight: '150px' }}
                        />
                    </Form.Item>

                </Form>
            </Modal>
        )
    }
}
export default CarouselForm;
