import React, { Component} from 'react';
import { Popconfirm, Pagination,  Radio, ConfigProvider } from 'antd';

import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import jaJp from 'antd/es/locale/ja_JP';
import viLocale from '../../language'
import enLocale from '../../enLanguge'

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('en');


export class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "in page",
        }
    }
    render() {
        return (
            <>
                <div className="example">
                    <Pagination defaultCurrent={1} total={50} showSizeChanger />
                    
                </div>
                
                <Popconfirm title="Question?">
                    <a href="#">Click to confirm</a>
                </Popconfirm>
            </>
        )
    }
}

export class SettingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: "",
        }
        this.changeLocale = this.changeLocale.bind(this);
    }

    changeLocale(e) {
        console.log(e.target.value);
        const localeValue = e.target.value;
        this.setState({ locale: localeValue })
        /*if (!localeValue) {
            moment.locale('en')
        } else {
            moment.locale('ja')
        }*/
        
        

    }

    render() {
        return (
            <div>
                <div className="change-locale">
                    <span style={{ marginRight: 16 }}>Change locale of components: </span>
                    <Radio.Group value={this.state.locale} onChange={this.changeLocale}>
                        <Radio.Button key="en" value={enUS}>
                            English
                        </Radio.Button>
                        <Radio.Button key="ja" value={jaJp}>
                            Japan
                        </Radio.Button>
                        <Radio.Button key="vi" value={viLocale}>
                            customize vi
                        </Radio.Button>
                    </Radio.Group>
                </div>
                <ConfigProvider locale={this.state.locale}>
                    <Page
                        key={this.state.locale ? this.state.locale.locale : 'en' /* Have to refresh for production environment */}
                    />
                </ConfigProvider>
            </div>
        )
    }
}

