interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Content Creator', 'Moderator', 'Subscriber', 'Guest'],
  tenantName: 'Company',
  applicationName: 'Community platform',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage content', 'Manage forums'],
  getQuoteUrl: 'https://app.roq.ai/proposal/d328a1c5-00ad-4d61-8373-90bc99e799c9',
};
