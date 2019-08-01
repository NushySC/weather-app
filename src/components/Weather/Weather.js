import React from 'react';
import Styles from './Weather.module.scss';
import Toggle from '../Toggle/Toggle';

let options = {weekday: 'short', month: 'short', day: 'numeric'};

const Weather = props => {
	return (
		<div className={Styles.outputs}>
			{props.id && props.country && (
				<div className={Styles.fontIcon}>
					<i className={`owf owf-${props.id}`} />
				</div>
			)}

			{props.city && props.country && (
				<h2 className={Styles.outputCity}>
					{props.city}, {props.country}
				</h2>
			)}
			{props.main && props.description && (
				<div className={Styles.outputDesc}>
					{props.main}/{props.description}
				</div>
			)}

			<div className={Styles.outputDatas}>
				<div className={Styles.outputData}>
					{props.temperature && (
						<div className={Styles.outputTitle}>
							Temperature
							<p className={Styles.outputResult}>
								{props.temperature}°C
							</p>
						</div>
					)}
				</div>

				<div className={Styles.outputData}>
					{props.wind && (
						<div className={Styles.outputTitle}>
							Wind
							<p className={Styles.outputResult}>
								{props.wind} m/s
							</p>
						</div>
					)}
				</div>

				<div className={Styles.outputData}>
					{props.humidity && (
						<div className={Styles.outputTitle}>
							Humidity
							<p className={Styles.outputResult}>
								{props.humidity}%
							</p>
						</div>
					)}
				</div>
			</div>

			{props.forecast1 && (
				<div className={Styles.forecasts}>
					<div className={Styles.forecast}>
						{props.forecast1 && (
							<div className={Styles.nextTemp}>
								<i
									className={`owf owf-${props.tomorrowIcon}`}
								/>
								<p className={Styles.future}>
									{props.tomorrow.toLocaleString(
										'en-US',
										options
									)}
								</p>
								<p className={Styles.future}>
									{props.forecast1} °C
								</p>
							</div>
						)}
					</div>

					<div className={Styles.forecast}>
						{props.forecast2 && (
							<div className={Styles.nextTemp}>
								<i
									className={`owf owf-${
										props.afterTomorrowIcon
									}`}
								/>
								<p className={Styles.future}>
									{props.afterTomorrow.toLocaleString(
										'en-US',
										options
									)}
								</p>
								<p className={Styles.future}>
									{props.forecast2} °C
								</p>
							</div>
						)}
					</div>

					<div className={Styles.forecast}>
						{props.forecast3 && (
							<div className={Styles.nextTemp}>
								<i
									className={`owf owf-${
										props.afterAfterTomorrowIcon
									}`}
								/>
								<p className={Styles.future}>
									{props.afterAfterTomorrow.toLocaleString(
										'en-US',
										options
									)}
								</p>
								<p className={Styles.future}>
									{props.forecast3} °C
								</p>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Weather;
