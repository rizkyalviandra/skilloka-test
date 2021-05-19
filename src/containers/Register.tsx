import axios from 'axios';
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
  Typography,
} from 'antd';
import { FaAngleLeft } from 'react-icons/fa';
import { useForm } from 'antd/lib/form/Form';
import Layout from '../components/Layout';
import Logo from '../assets/logo.png';
import { useEffect, useState } from 'react';
import Recaptcha from 'react-recaptcha';

export default function Register() {
  const [fieldCompany, setFieldCompany] = useState([]);
  const [form] = useForm();
  let recaptchaInstance;

  useEffect(() => {
    axios
      .get('https://hris.widyaskilloka.com/api/v1/master/company-types')
      .then((res) => {
        setFieldCompany(res.data.data);
        console.log(res.data.data);
      });
  }, []);

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  function onChange(value: any) {
    console.log(`selected ${value}`);
  }

  function onSearch(val: any) {
    console.log('search:', val);
  }

  function callback() {
    console.log('Done!!!');
  }

  function verifyCallback(response: any) {
    console.log(response);
  }

  const resetRecaptcha = () => {
    recaptchaInstance.reset();
  };

  return (
    <Layout>
      <Card
        style={{
          width: '700px',
          backgroundColor: 'white',
          marginTop: '10px',
          marginBottom: '100px',
          padding: '20px',
          borderRadius: '20px',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <img
            src={Logo}
            width={200}
            height={50}
            style={{ marginTop: '-20px' }}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <Typography.Title level={4}>Data Perusahaan</Typography.Title>
          <Form form={form} onFinish={onFinish} layout='vertical'>
            <Row justify='space-between'>
              <Form.Item
                name='companyName'
                label='Nama Perusahaan'
                rules={[
                  {
                    required: true,
                    message: 'Isian tidak boleh kosong.',
                  },
                ]}
              >
                <Input style={{ width: '270px' }} />
              </Form.Item>
              <Form.Item
                name='companyWebsite'
                label='Website Perusahaan'
                rules={[
                  {
                    required: true,
                    message: 'Isian tidak boleh kosong.',
                  },
                ]}
              >
                <Input style={{ width: '270px' }} />
              </Form.Item>
            </Row>
            <Row justify='space-between'>
              <Form.Item
                name='companyPhoneNumber'
                label='Nomor Telepon Perusahaan'
                rules={[
                  {
                    type: 'number',
                  },
                  {
                    required: true,
                    message: 'Masukkan nomor telepon perusahaan anda',
                  },
                ]}
              >
                <Input
                  addonBefore='+'
                  placeholder='62'
                  style={{ width: '270px' }}
                />
              </Form.Item>
              <Form.Item
                name='fieldCompany'
                label='Bidang Perusahaan'
                rules={[
                  {
                    required: true,
                    message: 'Masukkan Bidang perusahaan anda',
                  },
                ]}
              >
                <Select
                  style={{ width: '270px' }}
                  placeholder='Select...'
                  onChange={onChange}
                  optionFilterProp='children'
                  onSearch={onSearch}
                  filterOption={(input: any, option: any) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {fieldCompany.map((field: any) => (
                    <Select.Option value={field.name}>
                      {field.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Row>
            <Divider />
            <Typography.Title level={4}>Data diri Anda</Typography.Title>
            <Row justify='space-between'>
              <Form.Item
                name='fullname'
                label='Nama Lengkap'
                rules={[
                  {
                    required: true,
                    message: 'Isian tidak boleh kosong.',
                  },
                ]}
              >
                <Input style={{ width: '270px' }} />
              </Form.Item>
              <Form.Item
                name='nickname'
                label='Nama Panggilan'
                rules={[
                  {
                    required: true,
                    message: 'Isian tidak boleh kosong.',
                  },
                ]}
              >
                <Input style={{ width: '270px' }} />
              </Form.Item>
            </Row>
            <Row justify='space-between'>
              <Form.Item
                name='email'
                label='Email'
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Masukkan email anda',
                  },
                ]}
              >
                <Input style={{ width: '270px' }} />
              </Form.Item>
              <Form.Item
                name='phoneNumber'
                label='Telepon'
                rules={[
                  {
                    type: 'number',
                  },
                  {
                    required: true,
                    message: 'Masukkan nomor telepon anda',
                  },
                ]}
              >
                <Input
                  addonBefore='+'
                  placeholder='62'
                  style={{ width: '270px' }}
                />
              </Form.Item>
            </Row>
            <div className='px-40 py-4'>
              <Recaptcha
                sitekey='6LfvkNsaAAAAAOgvAN3y8oScsba6A40TJd1TRs_j'
                render='explicit'
                verifyCallback={verifyCallback}
                onloadCallback={callback}
              />
            </div>
            <Button
              htmlType='submit'
              type='primary'
              style={{
                backgroundColor: '#335777',
                color: 'white',
                width: '100%',
                height: '45px',
                padding: '5px',
                borderRadius: '4px',
              }}
            >
              Register
            </Button>
          </Form>
        </div>
        <div style={{ height: '30px' }} />
        <a href='#'>
          <div className='flex flex-row'>
            <Space>
              <FaAngleLeft style={{ width: '15px', height: '15px' }} />
              <span>Ke Halaman Login</span>
            </Space>
          </div>
        </a>
      </Card>
    </Layout>
  );
}
