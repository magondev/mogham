import { Card, Center, Grid, GridCol, Group, Paper, RingProgress, Space, Text } from "@mantine/core";
import { IconArrowRight, IconEye, IconProps, IconQuestionMark, IconUser } from "@tabler/icons-react";
import { BarChart } from '@mantine/charts';
import '@mantine/charts/styles.css';

// example data for bar chart with russian month names


const data = [
  { month: 'Янв.', value: 1200 },
  { month: 'Фев.', value: 1900 },
  { month: 'Март', value: 400 },
  { month: 'Апр.', value: 1000 },
  { month: 'Май', value: 7000 },
  { month: 'Июнь', value: 750 },
  { month: 'Июль', value: 2000 },
  { month: 'Авг.', value: 1500 },
  { month: 'Сен.', value: 2500 },
  { month: 'Окт.', value: 3000 },
  { month: 'Ноя.', value: 500 },
  { month: 'Дек.', value: 2000 },
];

export default function Dashboard()
{
  return (
    <div>
      <StatsGrid />
      <Space h="md" />
      <Card withBorder>
        <Text size="lg" fw="bold" c="dimmed">Профили в каждом месяце</Text>
        <Space h="xl" />
        <BarChart
          h={300}
          data={data}
          dataKey="month"
          series={[
            { name: 'value', color: 'blue.5', label: "Профили" },
          ]}
          tickLine="y"
        />
      </Card>
    </div>
  );
}

const StatsGrid = () =>
{
  return <Grid>
    <StatsGridItem title="Просмотры" value={55000} progressValue={65} color="blue.5" icon={<IconEye style={{ width: 20, height: 20 }} stroke={1.5} />} />
    <StatsGridItem title="Профили" value={899} progressValue={52} color="#1abc9c" icon={<IconUser style={{ width: 20, height: 20 }} stroke={1.5} />} />
    <StatsGridItem title="Запросы" value={13} progressValue={72} color="#2ecc71" icon={<IconQuestionMark style={{ width: 20, height: 20 }} stroke={1.5} />} />
  </Grid>;
}


// Add prop "icon" to props
type StatsGridItemProps = {
  title: string;
  value: number;
  progressValue: number;
  color: string;
  icon: React.ReactNode;
}

const StatsGridItem = ({ title, value, progressValue, color, icon }: StatsGridItemProps) =>
{
  return <GridCol span={4}>
    <Paper withBorder radius="sm" p="xs" key={12}>
      <Group>
        <RingProgress
          size={80}
          roundCaps
          thickness={8}
          sections={[{ value: progressValue, color: color }]}
          label={
            <Center>
              {icon}
            </Center>
          }
        />

        <div>
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
            {title}
          </Text>
          <Text fw={700} size="xl">
            {value}
          </Text>
        </div>
      </Group>
    </Paper>
  </GridCol>

}