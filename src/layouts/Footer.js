import React, {Fragment} from 'react';
import {Layout, Icon} from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import {copyRight} from '../defaultSettings';

const {Footer} = Layout;
const FooterView = () => (
    <Footer style={{padding: 0}}>
        <GlobalFooter
            copyright={
                <Fragment>
                    Copyright <Icon type="copyright" /> {copyRight}
                </Fragment>
            }
        />
    </Footer>
);
export default FooterView;
