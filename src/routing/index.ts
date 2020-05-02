import FinancialReport from '../views/financial-report';
import FinancialReportDetail from 'views/financial-report/detail/detail';
import ImportantAffair from 'views/important-affair';
import SafeProductionDetail from 'views/important-affair/safe-production/detail';

export interface IRoute {
  component: any;
  exact: boolean;
  path: string;
  directive: string;
}

// 业务逻辑模块入口
export const pages: IRoute[] = [
  {
    component: FinancialReport,
    exact: true,
    path: '/financial-report',
    directive: 'FinancialReport'
  },
  {
    component: FinancialReportDetail,
    exact: true,
    path: '/financial-report/detail',
    directive: 'FinancialReportDetail'
  },
  {
    component: ImportantAffair,
    exact: true,
    path: '/important-affair',
    directive: 'ImportantAffair'
  },
  {
    component: SafeProductionDetail,
    exact: true,
    path: '/important-affair/safe-production/detail',
    directive: 'SafeProductionDetail'
  },
];


export default pages;