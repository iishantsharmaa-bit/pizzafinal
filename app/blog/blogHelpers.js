function slugify(text = '') {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function decodeBasicEntities(text = '') {
  return text
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'");
}

export function getBlogIdentifier(blog, index = 0) {
  const rawId = blog?._id?.$oid || blog?._id || blog?.id || blog?.slug;
  if (rawId) {
    return String(rawId);
  }

  const titleSlug = slugify(blog?.title || `blog-${index + 1}`);
  return titleSlug || `blog-${index + 1}`;
}

export function formatBlogDate(createdAt) {
  if (!createdAt) {
    return 'Unknown Date';
  }

  const dateVal = typeof createdAt === 'object' && createdAt.$date ? createdAt.$date : createdAt;
  const dateObj = new Date(dateVal);

  if (Number.isNaN(dateObj.getTime())) {
    return 'Unknown Date';
  }

  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getBlogExcerpt(content = '', maxLength = 170) {
  const decodedContent = decodeBasicEntities(String(content));
  const plainText = decodedContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

  if (!plainText) {
    return 'Read this article for more details.';
  }

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return `${plainText.slice(0, maxLength).trim()}...`;
}

export function normalizeBlogHtml(content = '') {
  if (!content) return '';
  
  let html = String(content);
  
  // Decode HTML entities in the correct order to avoid double-decoding
  const entityMap = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&nbsp;': ' ',
    '&iexcl;': '¡',
    '&iquest;': '¿',
    '&copy;': '©',
    '&reg;': '®',
    '&deg;': '°',
  };
  
  // Decode entities
  Object.entries(entityMap).forEach(([entity, char]) => {
    const regex = new RegExp(entity.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    html = html.replace(regex, char);
  });
  
  // Handle numeric entities like &#123; or &#x7B;
  html = html.replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(parseInt(dec, 10));
  });
  html = html.replace(/&#x([0-9a-f]+);/gi, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });
  
  return html;
}