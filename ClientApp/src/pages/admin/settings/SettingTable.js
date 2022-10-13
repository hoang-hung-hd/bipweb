import * as React from 'react';
import { Button, Form } from 'antd'

import "antd/dist/antd.css";

export class SettingTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            showModal: false,
            titleModal: 'Create',
        }
    }
    handleOnFinish(e) {
        Object.keys(e).forEach(key => {
            console.log(`${key}: ${e[key].hex}`)
        })
    }


    render() {
        return (
            <>

                <Form onFinish={(e) => this.handleOnFinish(e)} >
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Show values in console
                        </Button>
                    </Form.Item>
                </Form>

            </>
        );
    }

}