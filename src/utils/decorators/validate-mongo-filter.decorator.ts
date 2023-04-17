import { skipParentheses } from '../database/mongoose';

export enum SearchTypeEnum {
  'like',
  'equal'
}

type AllowedFilter = {
  type: SearchTypeEnum;
  name: string;
};

export function ValidateMongoFilter(allowedFilterList: AllowedFilter[] = []) {
  return (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const input = args[0];

      const where = {};

      where['deletedAt'] = null;

      if (input?.search?.id) {
        where['_id'] = input.search.id.trim();
        delete input.search.id;
      }

      for (const allowedFilter of allowedFilterList) {
        if (!input.search) continue;
        const filter = input.search[allowedFilter.name];

        if (!filter) continue;

        if (allowedFilter.type === SearchTypeEnum.equal) {
          where[allowedFilter.name] = filter;
        }

        if (allowedFilter.type === SearchTypeEnum.like) {
          where[allowedFilter.name] = new RegExp(skipParentheses(filter), 'gi');
        }
      }

      args[0].search = where;
      const result = originalMethod.apply(this, args);
      return result;
    };
  };
}
