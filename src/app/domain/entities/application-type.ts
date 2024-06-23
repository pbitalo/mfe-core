export enum ApplicationType {
  home = 'home',
  users = 'users',
  customers = 'customers',
}

export namespace ApplicationType {
  export function getApplicationTypeFromString(
    applicationTypeString: string
  ): ApplicationType {
    switch (applicationTypeString) {
      case ApplicationType.home:
        return ApplicationType.home;
      case ApplicationType.users:
        return ApplicationType.users;
      case ApplicationType.customers:
        return ApplicationType.customers;
      default:
        throw 'Aplicação não encontrada';
    }
  }
}
