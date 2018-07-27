import { Injectable } from "@angular/core";

@Injectable()
export class HelperService {
  constructor() {}

  objectifyArray(items: Array<any>, key: string) {

    if (!key) {
      throw new Error("Please include a key for iteration");
    }

    if (!Array.isArray(items)) return {};
    if (!items.length) return {};
    return items.reduce((newObject, item, index) => {
      newObject[item[key]] = item;
      return newObject;
    }, {});
  }


  paginate(items: Array<any>, pageNumber: number, pageSize:number=10){

    let totalItems = items.length;
    let totalPages = Math.ceil(totalItems / pageSize);
    let page = 1;
    let toReturn = {totalItems: totalItems,pageNumber:pageNumber,pageSize:pageSize,totalPages:totalPages};
    while(page <= totalPages){
      let startIndex = pageSize * (page - 1);
      toReturn[page] = items.slice(startIndex,startIndex+ pageSize);
      ++page;
    }
    return toReturn;
  }


  arrayfyObject(obj: object){

    if(Array.isArray(obj)) return obj;
    return Object.keys(obj)
                 .map((key)=>{
                    return obj[key];
                });
  }
}
