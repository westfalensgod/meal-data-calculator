import React from 'react'
import { Typography, Form, Input, Button, Checkbox, Select } from 'antd'
import axios from 'axios'
import styles from './IngridientForm.module.css'

const { Title } = Typography
const { Option } = Select

const IngridientForm = () => {
  const [option, setOption] = React.useState(null)

  const onFinish = (values: any) => {
    const updatedValues = Object.entries(values).map(value => {
      if (value[0] === 'ingridient') {
        return value
      }
      value[1] = Number(value[1])

      return value
    })

    const data = {}

    updatedValues.forEach(value => {
      data[value[0]] = value[1]
    })

    data.state = option
    data.portionSize =


      axios.post('/api/ingridients', data)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.ingridientFormWrapper}>
      <Title level={2}>Add Ingridient Data</Title>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Ингридиент"
          name="ingridient"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Калории"
          name="calories"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input suffix="ккал" />
        </Form.Item>

        <Form.Item
          label="Белки"
          name="protein"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input suffix="Б" />
        </Form.Item>

        <Form.Item
          label="Жиры"
          name="fat"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input suffix="Ж" />
        </Form.Item>

        <Form.Item
          label="Углеводы"
          name="carb"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input suffix="У" />
        </Form.Item>

        <Form.Item
          label="Размер порции"
          name="portionSize"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            onChange={(val) => setOption(val)}
          >
            <Option value="raw">Raw</Option>
            <Option value="fried">Fried</Option>
            <Option value="boiled">Boiled/Steamed</Option>
            <Option value="cooked">Cooked</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default IngridientForm

