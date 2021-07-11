using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InternetMall.Models;
using Microsoft.AspNetCore.Mvc;

namespace Internetmall.Interfaces
{
    interface ISearchService
    {
        public List<Shop> SearchShop(string shopName);

        public Task<List<Commodity>> SearchCommodity(string commodityName, int key = 0);//commodityName�������ؼ��ʣ�key�������������������(Ĭ�ϰ�������)��0�����������1�����۸�����2�����۸���3������������
    }
}
