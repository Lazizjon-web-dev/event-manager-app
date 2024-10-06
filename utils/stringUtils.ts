export function shortenDescription(longString: string,length=100,start=0): string {
    if (longString.length <= length) return longString;
    
    return longString.slice(start, length) + '...';
  }