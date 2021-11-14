import React, {useState, ComponentProps} from 'react';
import {PieChart} from 'react-minimal-pie-chart';

type Props = {
    data: ComponentProps<typeof PieChart>['data'];
};

function FullOption(props: Props) {
    const [selected, setSelected] = useState<number | undefined>(0);
    const [hovered, setHovered] = useState<number | undefined>(undefined);

    const data = props.data.map((entry, i) => {
        if (hovered === i) {
            return {
                ...entry,
                color: '#fe3477',
            };
        }
        return entry;
    });

    const lineWidth = 55;

    return (
        <PieChart
            style={{
                fontSize: '7px',
            }}
            data={data}
            radius={PieChart.defaultProps.radius - 6}
            lineWidth={55}
            segmentsStyle={{transition: 'stroke .3s', cursor: 'pointer'}}
            segmentsShift={(index) => (index === selected ? 6 : 1)}
            animate
            label={({dataEntry}) => Math.round(dataEntry.percentage) + '%'}
            labelPosition={100 - lineWidth / 2}
            labelStyle={{
                fill: '#fff',
                opacity: 0.75,
                pointerEvents: 'none',
            }}
            onClick={(_, index) => {
                setSelected(index === selected ? undefined : index);

            }}
            onMouseOver={(_, index) => {
                setHovered(index);
            }}
            onMouseOut={() => {
                setHovered(undefined);
            }}
        />
    );
}

export default FullOption;