## rc-calendar-graph

一个研发组件的日历图表，用于展示研发人员的日常研发情况。

## 需求数据格式

```json
{
  "max": 31,
  "min": 1,
  "total": 1933,
  "githubTotal": 641,
  "codeTotal": 1292,
  "year": "2023",
  "days": [
    {
      "week": 1,
      "days": [
        {
          "date": "2023-01-01",
          "day": 0,
          "month": 1,
          "total": 0,
          "week": 1,
          "year": 2023,
          "count": 5,
          "codeCount": 0,
          "githubCount": 5
        },
        {
          "date": "2023-01-02",
          "day": 1,
          "month": 1,
          "total": 0,
          "week": 1,
          "year": 2023,
          "count": 3,
          "codeCount": 0,
          "githubCount": 3
        },
        {
          "date": "2023-01-03",
          "day": 2,
          "month": 1,
          "total": 29,
          "week": 1,
          "year": 2023,
          "count": 35,
          "codeCount": 29,
          "githubCount": 6
        },
        {
          "date": "2023-01-04",
          "day": 3,
          "month": 1,
          "total": 26,
          "week": 1,
          "year": 2023,
          "count": 27,
          "codeCount": 26,
          "githubCount": 1
        },
        {
          "date": "2023-01-05",
          "day": 4,
          "month": 1,
          "total": 1,
          "week": 1,
          "year": 2023,
          "count": 2,
          "codeCount": 1,
          "githubCount": 1
        },
        {
          "date": "2023-01-06",
          "day": 5,
          "month": 1,
          "total": 9,
          "week": 1,
          "year": 2023,
          "count": 14,
          "codeCount": 9,
          "githubCount": 5
        },
        {
          "date": "2023-01-07",
          "day": 6,
          "month": 1,
          "total": 1,
          "week": 1,
          "year": 2023,
          "count": 1,
          "codeCount": 1,
          "githubCount": 0
        }
      ]
    }
  ]
}
```

## 使用方法

```tsx
<CalendarGraph
  boxRender={(defaultDom, item) => {
    return <Tooltip title={<div>{item.date}</div>}>{defaultDom}</Tooltip>;
  }}
  calendarGraphList={data?.days || []}
/>
```

![demo](https://mdn.alipayobjects.com/huamei_ptjqan/afts/img/A*_rkKTKhRhO4AAAAAAAAAAAAADkN6AQ/original)

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| boxPadding | 每个格子的间距 | `number` | - | - |
| boxSize | 每个格子的大小 | `number` | - | - |
| calendarGraphList | 数据源 | `CalendarGraphList` | - | - |
| selectedDay | 选中某一天 | `string` | - | - |
| onSelectedDay | 选中某一天的回调 | `(day?: string) => void` | - | - |
| prefixCls | 自定义样式前缀 | `string` | - | - |
| colorLevel | 自定义颜色等级 | `{ start: number; end: number; color: string; }[]` | - | - |
| lowText | 自定义低文案 | `string` | - | - |
| highText | 自定义高文案 | `string` | - | - |
| boxRender | 自定义格子内容 | `(boxDom: React.ReactNode, boxItem: CalendarGraphItem) => React.ReactNode` | - | - |
| weekLabelList | 格子周提示标签 | `{ label: string; col: number; }[]` | - | - |
| getBoxColor | 获取格子颜色 | `(item?: CalendarGraphItem, isActive?: boolean) => string` | - | - |
