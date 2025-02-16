'use client';
import { useState } from 'react';
import { Button, Modal, Form, Input, Select, InputNumber, Steps, Upload, message } from 'antd';
import { UploadOutlined, HomeOutlined, InfoCircleOutlined, FileImageOutlined } from '@ant-design/icons';
import Layout from '@/components/admin/layout';

const { Option } = Select;
const { Step } = Steps;

const PropertyList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentStep(0); // Reset step to 0
    form.resetFields();
    setFileList([]);
  };

  const next = () => {
    if (currentStep === 1) {
      // You can add additional validation here if needed before moving to the next step
      form.validateFields().then(() => {
        setCurrentStep((prev) => prev + 1); // Move to next step
      }).catch(() => {
        // Handle validation failure if necessary
      });
    } else {
      setCurrentStep((prev) => prev + 1); // Proceed with the next step
    }
  };

  const prev = () => {
    setCurrentStep((prev) => prev - 1); // Go back to previous step
  };

  const handleSubmit = (values: any) => {
    console.log('Submitted values:', { ...values, images: fileList });
    setIsModalVisible(false);
    form.resetFields();
    setFileList([]);
    setCurrentStep(0); // Reset step after submit
  };

  const uploadProps = {
    fileList,
    onChange: ({ fileList }: any) => setFileList(fileList),
    beforeUpload: (file: any) => {
      if (fileList.length >= 4) {
        message.error('You can only upload up to 4 images');
        return false;
      }
      return true;
    },
    multiple: true,
    maxCount: 4,
  };

  const steps = [
    {
      title: 'Property Type',
      icon: <HomeOutlined />,
      content: (
        <Form.Item
          label="Property Type"
          name="type"
          rules={[{ required: true, message: 'Please select the property type' }]}>
          <Select placeholder="Select property type">
            <Option value="apartment">Apartment</Option>
            <Option value="house">House</Option>
            <Option value="villa">Villa</Option>
            <Option value="commercial">Commercial</Option>
          </Select>
        </Form.Item>
      ),
    },
    {
      title: 'Details',
      icon: <InfoCircleOutlined />,
      content: (
        <>
          <Form.Item
            label="Property Title"
            name="title"
            rules={[{ required: true, message: 'Please enter the property title' }]}>
            <Input placeholder="Enter property title" />
          </Form.Item>
          <Form.Item
            label="Price ($)"
            name="price"
            rules={[{ required: true, message: 'Please enter the price' }]}>
            <InputNumber
              placeholder="Enter price"
              style={{ width: '100%' }}
              min={0}
            />
          </Form.Item>
          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: 'Please enter the location' }]}>
            <Input placeholder="Enter location" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter a description' }]}>
            <Input.TextArea rows={4} placeholder="Enter property description" />
          </Form.Item>
        </>
      ),
    },
    {
      title: 'Images',
      icon: <FileImageOutlined />,
      content: (
        <Form.Item
          label="Upload Images"
          rules={[{ required: true, message: 'Please upload at least 2 images' }]}>
          <Upload {...uploadProps} listType="picture" accept="image/*">
            <Button icon={<UploadOutlined />}>Upload (Min: 2, Max: 4)</Button>
          </Upload>
        </Form.Item>
      ),
    },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Property Listings</h1>
          <Button type="primary" onClick={showModal}>
            Add Listing
          </Button>
        </div>

        {/* Property List Placeholder */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <p>No property listings available. Add a new listing to get started.</p>
        </div>

        {/* Add Listing Modal */}
        <Modal
          title="Add New Property"
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Steps current={currentStep} className="mb-6">
            {steps.map((step, index) => (
              <Step key={index} title={step.title} icon={step.icon} />
            ))}
          </Steps>

          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            {steps[currentStep].content}

            <div className="flex justify-end mt-4">
              {currentStep > 0 && (
                <Button onClick={prev} className="mr-2">
                  Previous
                </Button>
              )}
              {currentStep < steps.length - 1 ? (
                <Button type="primary" onClick={next}>
                  Next
                </Button>
              ) : (
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              )}
            </div>
          </Form>
        </Modal>
      </div>
    </Layout>
  );
};

export default PropertyList;
