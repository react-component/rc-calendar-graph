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
  calendarGraphList={days || []}
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

### 使用示例

```tsx
import React from 'react';
import CalendarGraph from 'rc-calendar-graph';

const MyComponent = () => {
  // 日历数据源
  const calendarGraphList = [
    // ...data
  ];

  // 选中某一天的回调函数
  const handleSelectedDay = (day) => {
    // ...handle selected day
  };

  return (
    <CalendarGraph
      calendarGraphList={calendarGraphList}
      selectedDay="2023-07-15"
      onSelectedDay={handleSelectedDay}
      boxPadding={10}
      boxSize={20}
      prefixCls="custom-calendar"
      colorLevel={[
        { start: 1, end: 10, color: 'rgba(24, 144, 255, 0.3)' },
        // ...more color levels
      ]}
      lowText="Low"
      highText="High"
      boxRender={(boxDom, boxItem) => (
        <div className="custom-box">
          {boxDom}
          <span className="tooltip">{boxItem.tooltip}</span>
        </div>
      )}
      weekLabelList={[
        { label: '周日', col: 1 },
        { label: '周二', col: 3 },
        { label: '周四', col: 5 },
        { label: '周六', col: 7 },
      ]}
      getBoxColor={(item, isActive) => (isActive ? 'green' : 'blue')}
    />
  );
};

export default MyComponent;
```

### CalendarGraphList 数据格式

```ts
type CalendarGraphList = CalendarGraphItem[];

interface CalendarGraphItem {
  date: string;
  day?: number;
  month?: number;
  total?: number;
  week?: number;
  year?: number;
  count: number;
}
```

- `date`: 日期，格式为 `YYYY-MM-DD`。
- `day` (可选): 日期中的天数。
- `month` (可选): 日期中的月份。
- `total` (可选): 表示每个格子的总数或累计值。
- `week` (可选): 日期所在的周数。
- `year` (可选): 日期所在的年份。
- `count`: 表示每个格子的计数或值。

上述字段中的 `day`、`month`、`total`、`week` 和 `year` 都是可选的，你可以根据需要选择性地使用它们来提供更多的日期信息。如果某个字段没有提供，默认情况下将不显示该信息。另外，`count` 字段是每个格子必需的，用于显示每个格子的具体数值。

### 自定义格子内容 (boxRender)

`boxRender` 函数可以自定义每个格子的内容。它接收两个参数：

- `boxDom`: 表示当前格子的默认内容。
- `boxItem`: 表示当前格子的数据项。

你可以自定义格子的样式和内容，然后将它们与 `boxDom` 结合在一起返回。

```tsx
import React from 'react';
import CalendarGraph from 'path/to/CalendarGraph';

const MyComponent = () => {
  // 日历数据源
  const calendarGraphList = [
    // ...data
  ];

  // 自定义格子内容的渲染函数
  const customBoxRender = (boxDom, boxItem) => {
    // 在默认内容基础上添加自定义内容
    return (
      <div className="custom-box">
        {boxDom}
        <span className="tooltip">{boxItem.count}</span>
      </div>
    );
  };

  return (
    <CalendarGraph
      calendarGraphList={calendarGraphList}
      boxRender={customBoxRender}
    />
  );
};

export default MyComponent;
```

以下是一个示例，展示如何使用 `boxRender` 函数来自定义格子的内容：

```jsx
import React from 'react';
import CalendarGraph from 'path/to/CalendarGraph';

const MyComponent = () => {
  // 日历数据源
  const calendarGraphList = [
    // ...data
  ];

  // 自定义格子内容的渲染函数
  const customBoxRender = (boxDom, boxItem) => {
    // 在默认内容基础上添加自定义内容
    return (
      <div className="custom-box">
        {boxDom}
        <span className="tooltip">{boxItem.count}</span>
      </div>
    );
  };

  return (
    <CalendarGraph
      calendarGraphList={calendarGraphList}
      boxRender={customBoxRender}
    />
  );
};

export default MyComponent;
```

在上述示例中，我们定义了一个 `customBoxRender` 函数，它接收 `boxDom` 和 `boxItem` 作为参数。在这个函数中，我们可以根据需要自定义格子的样式和内容。

在这个例子中，我们在默认内容的基础上添加了一个自定义的提示信息，通过一个 `<span>` 元素展示了 `boxItem.count` 中的数值。最后，我们将自定义渲染函数 `customBoxRender` 作为 `boxRender` 的值传递给了 `CalendarGraph` 组件。

通过使用 `boxRender` 函数，你可以根据需求自定义格子的内容，添加任何你想要的元素或样式。

### 样式定制

你可以通过自定义样式前缀 (`prefixCls`) 来自定义组件的样式。例如，将样式类名设置为 `custom-calendar`，然后使用相应的 CSS 样式来覆盖默认样式。

### 格子颜色

通过 `colorLevel` 和 `getBoxColor` 可以自定义格子的颜色。`colorLevel` 是一个颜色等级列表，定义了每个值范围的颜色。`getBoxColor` 是一个函数，接收当前格子的数据项和是否为选中状态作为参数，并返回相应的颜色值。

### 格子周提示标签

通过 `weekLabelList` 可以自定义格子周提示标签。每个标签包含两个属性：

- `label`: 周提示文本。
- `col`: 标签对应的列数。
