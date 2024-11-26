'use client';

import React from 'react';
import { Card, Row, Col, Statistic, Table } from 'antd';
import {
  CheckCircleOutlined,
  SyncOutlined,
  ClockCircleOutlined,
  WarningOutlined,
} from '@ant-design/icons';

const DashboardPage = () => {
  // 示例数据
  const statistics = [
    {
      title: 'Active Crawlers',
      value: 5,
      icon: <SyncOutlined style={{ color: '#1890ff' }} />,
      color: '#1890ff',
    },
    {
      title: 'Completed Tasks',
      value: 128,
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      color: '#52c41a',
    },
    {
      title: 'Pending Tasks',
      value: 12,
      icon: <ClockCircleOutlined style={{ color: '#faad14' }} />,
      color: '#faad14',
    },
    {
      title: 'Failed Tasks',
      value: 3,
      icon: <WarningOutlined style={{ color: '#ff4d4f' }} />,
      color: '#ff4d4f',
    },
  ];

  const recentTasks = [
    {
      key: '1',
      task: 'Misttrace Crawl',
      status: 'Running',
      progress: 75,
      startTime: '2024-02-25 10:00:00',
    },
    // Add more tasks as needed
  ];

  const columns = [
    {
      title: 'Task',
      dataIndex: 'task',
      key: 'task',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const statusColors: Record<string, string> = {
          Running: '#1890ff',
          Completed: '#52c41a',
          Failed: '#ff4d4f',
          Pending: '#faad14',
        };
        return (
          <span style={{ color: statusColors[status] }}>
            {status}
          </span>
        );
      },
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (progress: number) => `${progress}%`,
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime',
    },
  ];

  return (
    <div>
      <Row gutter={[16, 16]}>
        {statistics.map((stat, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card bordered={false}>
              <Statistic
                title={stat.title}
                value={stat.value}
                prefix={stat.icon}
                valueStyle={{ color: stat.color }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Card
        title="Recent Tasks"
        style={{ marginTop: 16 }}
        extra={<a href="#">View All</a>}
      >
        <Table
          columns={columns}
          dataSource={recentTasks}
          pagination={false}
        />
      </Card>
    </div>
  );
};

export default DashboardPage;