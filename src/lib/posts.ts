import { getCollection } from 'astro:content';

export async function getNumberedPosts() {
	const allPosts = (await getCollection('blog')).sort(
		(a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
	);

	return allPosts.map((post, i) => ({
		...post,
		number: String(i + 1).padStart(2, '0'),
	}));
}
