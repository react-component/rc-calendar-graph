'use client';

import { useEffect, useState } from 'react';
import { CalendarGraphList } from './components/CalendarGraph';
import CalendarGraph from './components/CalendarGraph';
import Card from 'antd/es/card';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Tooltip from 'antd/es/tooltip';
import Statistic from 'antd/es/statistic';

export interface HotMapData {
  max: number;
  min: number;
  total: number;
  year: string;
  days: CalendarGraphList;
  githubTotal: number;
  codeTotal: number;
}

async function getData() {
  const res = await fetch('http://localhost:3000/api/contributions');
  return res.json() as Promise<HotMapData>;
}

export default function Page() {
  const [data, setData] = useState<HotMapData>();
  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <main
      style={{
        minWidth: 500,
        margin: 24,
      }}
    >
      <Card
        bodyStyle={{
          padding: 0,
          width: 'max-content',
        }}
        style={{
          width: 'max-content',
        }}
        headStyle={{
          borderBottom: 'none',
        }}
        title="chenshuai2144 研发记录"
      >
        <div
          style={{
            padding: 24,
            paddingBottom: 12,
            width: 'max-content',
            borderBottom: '1px solid #eee',
          }}
        >
          <CalendarGraph
            boxRender={(defaultDom, item) => {
              return (
                <Tooltip title={<div>{item.date}</div>}>{defaultDom}</Tooltip>
              );
            }}
            calendarGraphList={data?.days || []}
          />
        </div>
        <Row gutter={16}>
          <Col
            span={6}
            style={{
              padding: '12px 24px',
              borderRight: '1px solid #eee',
            }}
          >
            <Statistic
              title="最大连续提交天数"
              value={data?.max}
              suffix={'天'}
            />
          </Col>
          <Col
            span={6}
            style={{
              padding: '12px 24px',
              borderRight: '1px solid #eee',
            }}
          >
            <Statistic title={'半年总研发活动'} value={data?.total} />
          </Col>

          <Col
            span={6}
            style={{
              padding: '12px 24px',
              borderRight: '1px solid #eee',
            }}
          >
            <Statistic
              title={'github 半年总研发活动'}
              value={data?.githubTotal}
            />
          </Col>
          <Col
            span={6}
            style={{
              padding: '12px 24px',
            }}
          >
            <Statistic title={'code 半年总研发活动'} value={data?.codeTotal} />
          </Col>
        </Row>
      </Card>
    </main>
  );
}
