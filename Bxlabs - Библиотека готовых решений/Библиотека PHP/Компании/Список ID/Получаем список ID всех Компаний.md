https://bxlabs.ru/php/kompanii/spisokid/poluchaem-spisok-id-kompaniy/

use Bitrix\Crm\CompanyTable;  
  
$arSelect = [  
                'ID'  
];  
  
$arCompanies = CompanyTable::getList([  
                'select' => $arSelect,  
                'cache' => ['ttl' => 3600]  
])->fetchAll();  
  
$companyIDs = [];  
foreach ($arCompanies as $company) {  
                $companyIDs[] = $company['ID'];  
}  
  
// Получаем корневую активность бизнес-процесса  
$rootActivity = $this->GetRootActivity();  
  
// Присваиваем переменной CompanyIDs значение массива с идентификаторами компаний  
$rootActivity->SetVariable("CompanyIDs", $companyIDs);