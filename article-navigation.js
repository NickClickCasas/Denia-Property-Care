const articleSequence = [
  'closing-up-your-denia-property-for-winter.html',
  'empty-property-risks-denia.html',
  'non-resident-property-tax-spain.html',
  'pool-maintenance-august-denia.html',
  'key-holding-denia.html',
  'changeover-day-denia.html',
  'alicante-or-valencia-airport-denia.html'
];

const articleTitles = {
  'closing-up-your-denia-property-for-winter.html': 'Your property is empty eight months a year. Here\'s what that risks.',
  'empty-property-risks-denia.html': 'The Spanish tax calendar for non-resident owners, in plain English',
  'non-resident-property-tax-spain.html': 'Why a pool looks tired by August — and what a weekly visit catches first',
  'pool-maintenance-august-denia.html': 'Key holding is not a spare key in a drawer',
  'key-holding-denia.html': 'Changeover day: what a proper turnaround between guests involves',
  'changeover-day-denia.html': 'Alicante or Valencia? Choosing your airport for Denia',
  'alicante-or-valencia-airport-denia.html': 'Back to the blog'
};

const currentPage = window.location.pathname.split('/').pop() || 'blog.html';
const currentIndex = articleSequence.indexOf(currentPage);
const nav = document.getElementById('article-navigation');

if (nav) {
  if (currentIndex >= 0 && currentIndex < articleSequence.length - 1) {
    const nextPage = articleSequence[currentIndex + 1];
    const nextTitle = articleTitles[nextPage] || 'Next article';

    nav.innerHTML = `
      <a href="${nextPage}" class="hover-card block bg-white border border-gray-200 rounded-2xl p-6 mt-8">
        <span class="block text-xs uppercase tracking-wider text-gray-500 mb-2">Next article</span>
        <span class="font-serif text-xl font-bold text-gray-900">${nextTitle}</span>
      </a>
    `;
  } else {
    nav.innerHTML = `
      <a href="blog.html" class="hover-card block bg-white border border-gray-200 rounded-2xl p-6 mt-8">
        <span class="block text-xs uppercase tracking-wider text-gray-500 mb-2">Back to the blog</span>
        <span class="font-serif text-xl font-bold text-gray-900">All articles</span>
      </a>
    `;
  }
}
