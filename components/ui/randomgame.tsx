''
import React from 'react';

const PieChart = () => {
	const sections = [
		{ label: 'Section 1', value: 20, color: 'bg-red-500' },
		{ label: 'Section 2', value: 15, color: 'bg-yellow-400' },
		{ label: 'Section 3', value: 10, color: 'bg-blue-500' },
		{ label: 'Section 4', value: 30, color: 'bg-indigo-500' },
		{ label: 'Section 5', value: 5, color: 'bg-green-500' },
		{ label: 'Section 6', value: 20, color: 'bg-teal-500' },
	];

	// Calculate the total value of all sections
	const total = sections.reduce((acc, section) => acc + section.value, 0);

	return (
		<div className="w-64 h-64 relative">
			{sections.map((section, index) => {
				const percentage = (section.value / total) * 100;
				const rotation = index === 0 ? 0 : sections.slice(0, index).reduce((acc, s) => acc + (s.value / total) * 360, 0);
				const pieClass = `w-full h-full absolute transform -rotate-[${rotation}] ${section.color} rounded-full`;
				return (
					<div
						key={section.label}
						className={pieClass}
						style={{ clipPath: `polygon(50% 50%, 100% 0, 100% 100%)` }}
					>
						<div className="absolute rotate-[200] inset-0 flex items-center justify-center">
							<span className="text-white">{`${section.label} (${percentage.toFixed(1)}%)`}</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default PieChart;
