'use client';

import React from 'react';
import useMergedState from 'rc-util/lib/hooks/useMergedState';

import { Dayjs } from 'dayjs';

import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

import dayjs from 'dayjs';

dayjs.extend(isSameOrAfter);

dayjs.locale('zh-cn');

export type CalendarGraphList = {
  week: number;
  days: {
    date: string;
    day: number;
    month: number;
    total: number;
    week: number;
    year: number;
    count: number;
    codeCount: number;
    githubCount: number;
  }[];
}[];

export const defaultColorLevel = [
  { start: -10, end: 1, color: 'rgba(24, 144, 255, 0.1)' },
  { start: 1, end: 10, color: 'rgba(24, 144, 255, 0.3)' },
  { start: 10, end: 20, color: 'rgba(24, 144, 255, 0.5)' },
  { start: 20, end: 30, color: 'rgba(24, 144, 255, 0.7)' },
  { start: 30, end: Infinity, color: 'rgba(24, 144, 255, 0.9)' },
];

export interface CalendarGraphItem {
  date: string;
  day: number;
  month: number;
  total: number;
  week: number;
  year: number;
  count: number;
  codeCount: number;
  githubCount: number;
}

const WEEKDAYS = 7;

export type CalendarGraphProps = {
  /**
   * 每个格子的间距
   */
  boxPadding?: number;
  /**
   * 每个格子的大小
   */
  boxSize?: number;

  /**
   * 数据源
   */
  calendarGraphList: CalendarGraphList;
  /**
   * 选中某一天
   */
  selectedDay?: string;
  /**
   * 选中某一天的回调
   * @param day
   * @returns
   */
  onSelectedDay?: (day?: string) => void;

  /**
   * 自定义样式前缀
   */
  prefixCls?: string;

  /**
   * 自定义颜色等级, 默认是 5 个等级
   * @example { start: 1, end: 10, color: 'rgba(24, 144, 255, 0.3)'}
   */
  colorLevel?: {
    start: number;
    end: number;
    color: string;
  }[];

  /**
   * 自定义低 / 高的文案
   */
  lowText?: string;

  /**
   * 自定义低 / 高的文案
   */
  highText?: string;

  /**
   * 自定义渲染每个格子的内容
   * @param boxDom
   * @param boxItem
   * @returns {React.ReactNode}
   */
  boxRender?: (
    boxDom: React.ReactNode,
    boxItem: CalendarGraphItem
  ) => React.ReactNode;

  /**
   * 定义格子的周提示标签，默认只有 4 个，分别是周日、周二、周四、周六
   */
  weekLabelList?: {
    label: string;
    col: number;
  }[];

  /**
   * 获取每个格子的颜色
   * @param item
   * @param isActive
   * @returns
   */
  getBoxColor?: (item?: CalendarGraphItem, isActive?: boolean) => string;
};

export const weekCNameMap = {
  Monday: '星期一',
  Tuesday: '星期二',
  Wednesday: '星期三',
  Thursday: '星期四',
  Friday: '星期五',
  Saturday: '星期六',
  Sunday: '星期日',
};

const defaultWeekLabelList = [
  { label: '周日', col: 0 },
  { label: '周二', col: 2 },
  { label: '周四', col: 4 },
  { label: '周六', col: 6 },
];

// 热力图渲染
function CalendarGraph(props: CalendarGraphProps) {
  const calendarGraphList = props.calendarGraphList || [];

  const prefixCls = props.prefixCls || 'rc-calendar-graph';
  const colorLevel = props.colorLevel || defaultColorLevel;
  const weekLabelList = props.weekLabelList || defaultWeekLabelList;

  /**
   * 获取每个格子的颜色, 默认是根据 count 数量来判断
   * @param item
   * @param isActive
   * @returns
   */
  function getColor(item?: CalendarGraphItem, isActive?: boolean) {
    if (props.getBoxColor) return props.getBoxColor(item, isActive);
    if (isActive) return 'red';
    if (!item) return 'rgba(0, 10, 26, 0.04)';
    const value = item.count;
    return colorLevel.find(({ start, end }) => value >= start && value < end)
      ?.color;
  }

  /**
   * 提示标签
   */
  const tipsList: { label?: string; color?: string }[] = [
    { label: props.lowText ?? '低' },
    ...colorLevel,
    { label: props.highText ?? '高' },
  ];

  const { boxSize = 12, boxPadding = 4 } = props;

  /**
   * 选中的日期, 用于高亮
   */
  const [selectedDay, setSelectedDay] = useMergedState(props.selectedDay, {
    value: props.selectedDay,
    onChange: props.onSelectedDay,
  });

  const svgHorzPadding = 10;
  const monthLabelHeight = 20;
  const weekLabelWidth = 26;
  const tipHeight = 40;
  const tipWidth = 140;

  const sizeWithPadding = boxSize + boxPadding;
  const width =
    calendarGraphList.length * sizeWithPadding +
    svgHorzPadding * 2 +
    weekLabelWidth;
  const height = WEEKDAYS * sizeWithPadding - boxPadding + monthLabelHeight;

  /**
   * 渲染月份标签，只有当月份的第一天是周日的时候才会绘制
   * @returns
   */
  const renderMonthLabel = () => {
    let currentMonth = -1;
    const monthCols: {
      col: number;
      month: string;
    }[] = [];

    calendarGraphList.forEach((column, col) => {
      const { date } = column.days[column.days.length - 1];
      if (!date) {
        return;
      }

      const dateDayjs = dayjs(date);

      const month = dateDayjs.get('months') + 1;

      // 判断当前列是否需要绘制月份
      if (month !== currentMonth && dateDayjs.get('date') <= 10) {
        currentMonth = month;
        monthCols.push({ col, month: `${dateDayjs.month() + 1} 月` });
      }
    });

    return (
      <g
        transform={`translate(${weekLabelWidth + svgHorzPadding}, 0)`}
        height={monthLabelHeight}
      >
        {monthCols.map((item) => (
          <text
            style={{
              dominantBaseline: 'text-before-edge',
              fontSize: 12,
            }}
            key={`month-${item.month}`}
            className={`${prefixCls}-month-label`}
            x={item.col * sizeWithPadding}
          >
            {item.month}
          </text>
        ))}
      </g>
    );
  };

  /**
   * 渲染每个格子
   * @param date
   * @param record
   * @param box
   * @returns
   */
  const renderBox = (date: Dayjs, record: CalendarGraphItem, box: any) => {
    if (props.boxRender) {
      return props.boxRender(box, record);
    }
    if (date.isSameOrAfter(Date.now(), 'day')) {
      return box;
    }
    return box;
  };

  /**
   * 渲染每一行
   * @param isFurtherDays
   * @param param1
   * @param row
   * @returns
   */
  const renderBoxContent = (
    isFurtherDays: boolean,
    {
      color,
      date,
      isActive,
      isOpacity,
    }: {
      date?: Dayjs;
      color?: string;
      isOpacity?: boolean;
      isActive?: boolean;
    },
    row: number
  ) => {
    const boxCls = [
      `${prefixCls}-day-box`,
      isOpacity ? `${prefixCls}-opacity` : '',
    ]
      .join(' ')
      .trim();

    if (isFurtherDays) {
      return (
        <React.Fragment key={date?.toString() || color}>
          <rect
            className={`${boxCls} ${isActive ? `${prefixCls}-active` : ''}`}
            height={boxSize}
            rx={4}
            ry={4}
            x={0}
            y={row * sizeWithPadding}
            fill="#f5f5f5"
            style={{
              cursor: 'pointer',
              outlineOffset: '-1px',
              pointerEvents: 'all',
              transition: 'all 0.3s',
              shapeRendering: 'geometricPrecision',
            }}
          />
          <rect
            className={`${boxCls} ${isActive ? `${prefixCls}-active` : ''}`}
            width={boxSize - 2}
            height={boxSize - 2}
            rx={4}
            style={{
              cursor: 'pointer',
              outlineOffset: '-1px',
              pointerEvents: 'all',
              shapeRendering: 'geometricPrecision',
              transition: 'all 0.3s',
            }}
            ry={4}
            x={1}
            y={row * sizeWithPadding + 1}
            fill="white"
          />
        </React.Fragment>
      );
    }

    return (
      <rect
        key={date?.toString() || color}
        className={`${boxCls} ${isActive ? `${prefixCls}-active` : ''}`}
        width={boxSize}
        onClick={() => {
          if (!date) return;
          if (selectedDay === dayjs(date)?.format('YYYY-MM-DD')) {
            setSelectedDay('');
            return;
          }
          setSelectedDay(dayjs(date)?.format('YYYY-MM-DD'));
        }}
        height={boxSize}
        rx={4}
        ry={4}
        x={0}
        style={{
          cursor: 'pointer',
          outlineOffset: '-1px',
          pointerEvents: 'all',
          shapeRendering: 'geometricPrecision',
          transition: 'all 0.3s',
        }}
        y={row * sizeWithPadding}
        fill={color || '#f5f5f5'}
      />
    );
  };

  /**
   * 渲染周标签
   * @returns
   */
  const renderWeekLabel = () => {
    return (
      <g transform={`translate(0, ${monthLabelHeight + 5})`}>
        {weekLabelList.map((item) => (
          <text
            style={{
              dominantBaseline: 'text-before-edge',
              fontSize: 12,
            }}
            key={`week${item.col}`}
            className={`${prefixCls}-week-label`}
            x={0}
            fontSize={'12px'}
            y={item.col * sizeWithPadding}
          >
            {item.label}
          </text>
        ))}
      </g>
    );
  };

  /**
   * 渲染提示标签
   * @returns
   */
  const renderTips = () => (
    <g transform={`translate(${width - tipWidth}, ${height + 25})`}>
      {tipsList.map(({ label, color }, index) => (
        <g
          key={`tips-${label}-${color}`}
          transform={`translate(${index * sizeWithPadding}, 0)`}
        >
          {label ? (
            <text
              y={-1}
              style={{
                dominantBaseline: 'text-before-edge',
                lineHeight: '12px',
                margin: '0 5px',
                transition: 'all 0.3s',
              }}
              x={0}
              fontSize={'12px'}
              className={`${prefixCls}-tips-label ${prefixCls}-tips-label-label`}
            >
              {label}
            </text>
          ) : (
            renderBoxContent(false, { color: color! }, 0)
          )}
        </g>
      ))}
    </g>
  );

  return (
    <svg width={width} height={height + boxSize + tipHeight}>
      {renderMonthLabel()}
      {renderWeekLabel()}
      {renderTips()}
      {calendarGraphList.map((column, col) => (
        <g
          key={`column-${col}`}
          transform={`translate(${
            col * sizeWithPadding + svgHorzPadding + weekLabelWidth
          }, ${monthLabelHeight + 8})`}
        >
          {column.days.map((item, row) => {
            const { date } = item;
            const isActive = dayjs(date).format('YYYY-MM-DD') === selectedDay;

            const color = getColor(item, isActive);
            const isFurtherDays = dayjs(date).isSameOrAfter(Date.now(), 'day');

            const isOpacity =
              !!selectedDay &&
              selectedDay !== 'no' &&
              dayjs(date).format('YYYY-MM-DD') !== selectedDay;

            return renderBox(
              dayjs(date),
              item!,
              renderBoxContent(
                isFurtherDays,
                { date: dayjs(date), color, isOpacity, isActive },
                row
              )
            );
          })}
        </g>
      ))}
    </svg>
  );
}

export default CalendarGraph;
