export const generateDemoRequestMailto = (subject: string, body: string): string => {
  const emailAddress = 'rfq@flyai.tr';
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  
  return `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
};
