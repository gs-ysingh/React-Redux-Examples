import React from 'react';
import _ from 'lodash';
import {Sparklines, SparklinesLine} from 'react-sparklines';

function average (data) {
	return _.round(_.sum(data) / data.length);
}

export default (props) => {
	return (
		<div>
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color}/>
			</Sparklines>
		</div>
		<div>{ average(props.data) }</div>
		</div>
	);
};