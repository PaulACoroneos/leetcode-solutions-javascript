function subdomainVisits(cpdomains: string[]): string[] {
  const fullDomainMap = {};
  
  cpdomains.forEach(val => {
      const [strCnt,domain] = val.split(' ')
      const cnt = Number(strCnt);
      const subdomains = domain.split('.');
      let subdomain = '';
      //generate all subdomains/domains
      for(let i =subdomains.length-1; i >= 0; i--) {
          subdomain = `${subdomains[i]}${subdomain ? '.' :''}${subdomain}`;
          if(fullDomainMap.hasOwnProperty(subdomain)) {
              fullDomainMap[subdomain] += cnt;
          }
          else {
              fullDomainMap[subdomain] = cnt;
          }
      }
  })
  return Object.entries(fullDomainMap).map(([key,val]) => `${val} ${key}`)
};