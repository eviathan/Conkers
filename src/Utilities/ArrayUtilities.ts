// eslint-disable-next-line import/prefer-default-export
export function groupBy<TItem>(
	arr: TItem[],
	fn: (item: TItem) => string | number
) {
	return arr.reduce<Record<string, TItem[]>>((prev, curr) => {
		const groupKey = fn(curr);
		const group = prev[groupKey] || [];
		group.push(curr);
		return { ...prev, [groupKey]: group };
	}, {});
}
