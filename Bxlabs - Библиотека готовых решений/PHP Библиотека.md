#### АБОБА PHP Code - Получаем все товары Сделки

# Заголовок 1 уровня
## Заголовок 2 уровня
### Заголовок 3 уровня

#### Заголовок 4 уровня
##### Заголовок 5 уровня
###### Заголовок 6 уровня

Простой текст. **Жирный текст.** *Текст курсивом.* ***Текст жирным курсивом.*** Текст

Горизонтальная
---
Линия

```
$products = \Bitrix\Crm\ProductRowTable::getList([  
        'select' => ['ID'],  
        'filter' => ['OWNER_ID' => 31493, 'OWNER_TYPE' => 'D']  
    ])->fetchAll();  
  
$rootActivity = $this->GetRootActivity();  
$rootActivity->SetVariable("productsIDs", $products);



#### PHP Code - Получаем все Сделки по Телефонам и Почте

use Bitrix\Crm\DealTable;  
  
$phoneString = "{{Phone}}";  
$emailString = "{{E-mail}}";  
  
$phoneNumbers = explode(", ", $phoneString);  
$emailAddresses = explode(", ", $emailString);  
  
$arFilter = array(  
'LOGIC' => 'OR',  
array('CONTACT.PHONE' => $phoneNumbers),  
array('COMPANY.PHONE' => $phoneNumbers),  
array('CONTACT.EMAIL' => $emailAddresses),  
array('COMPANY.EMAIL' => $emailAddresses)  
);  
  
$arSelect = array('ID');  
  
$arDeals = DealTable::getList(array(  
'order' => array('ID' => 'DESC'),  
'filter' => $arFilter,  
'select' => $arSelect,  
'cache' => array('ttl' => 3600)  
))->fetchAll();  
  
$dealIDs = array();  
foreach ($arDeals as $deal) {  
    $dealIDs[] = $deal['ID'];  
}  
  
$rootActivity = $this->GetRootActivity();  
  
$rootActivity->SetVariable("DealIDs", $dealIDs);

```
$products = \Bitrix\Crm\ProductRowTable::getList([  
        'select' => ['ID'],  
        'filter' => ['OWNER_ID' => 31493, 'OWNER_TYPE' => 'D']  
    ])->fetchAll();  
  
$rootActivity = $this->GetRootActivity();  
$rootActivity->SetVariable("productsIDs", $products);



#### PHP Code - Получаем все Сделки по Телефонам и Почте

use Bitrix\Crm\DealTable;  
  
$phoneString = "{{Phone}}";  
$emailString = "{{E-mail}}";  
  
$phoneNumbers = explode(", ", $phoneString);  
$emailAddresses = explode(", ", $emailString);  
  
$arFilter = array(  
'LOGIC' => 'OR',  
array('CONTACT.PHONE' => $phoneNumbers),  
array('COMPANY.PHONE' => $phoneNumbers),  
array('CONTACT.EMAIL' => $emailAddresses),  
array('COMPANY.EMAIL' => $emailAddresses)  
);  
  
$arSelect = array('ID');  
  
$arDeals = DealTable::getList(array(  
'order' => array('ID' => 'DESC'),  
'filter' => $arFilter,  
'select' => $arSelect,  
'cache' => array('ttl' => 3600)  
))->fetchAll();  
  
$dealIDs = array();  
foreach ($arDeals as $deal) {  
    $dealIDs[] = $deal['ID'];  
}  
  
$rootActivity = $this->GetRootActivity();  
  
$rootActivity->SetVariable("DealIDs", $dealIDs);



#### PHP Code - Получаем все Сделки по Телефонам и Почте, которые в работе

use Bitrix\Crm\DealTable;  
  
$phoneString = "{{Phone}}";  
$emailString = "{{E-mail}}";  
  
$phoneNumbers = explode(", ", $phoneString);  
$emailAddresses = explode(", ", $emailString);  
  
$arFilter = array(  
'LOGIC' => 'OR',  
array('CONTACT.PHONE' => $phoneNumbers),  
array('COMPANY.PHONE' => $phoneNumbers),  
array('CONTACT.EMAIL' => $emailAddresses),  
array('COMPANY.EMAIL' => $emailAddresses)  
);  
  
$arSelect = array('ID');  
  
$arDeals = DealTable::getList(array(  
'order' => array('ID' => 'DESC'),  
'filter' => $arFilter,  
'select' => $arSelect,  
'cache' => array('ttl' => 3600)  
))->fetchAll();  
  
$dealIDs = array();  
foreach ($arDeals as $deal) {  
    $dealIDs[] = $deal['ID'];  
}  
  
// Проверяем, являются ли сделки открытыми  
$filteredDealIDs = array();  
foreach ($dealIDs as $dealID) {  
    $deal = DealTable::getById($dealID)->fetch();  
    if ($deal['CLOSED'] === 'N') {  
        $filteredDealIDs[] = $dealID;  
    }  
}  
  
$rootActivity = $this->GetRootActivity();  
  
$rootActivity->SetVariable("DealIDs", $filteredDealIDs);



#### PHP Code - Получаем все Сделки по Телефонам и Почте, которые в работе, по направлению
use Bitrix\Crm\DealTable;  
  
$phoneString = "{{Phone}}";  
$emailString = "{{E-mail}}";  
$dealDirection = 13; // Замените 13 на ваше значение CATEGORY_ID направления сделки  
  
$phoneNumbers = explode(", ", $phoneString);  
$emailAddresses = explode(", ", $emailString);  
  
$arFilter = array(  
'LOGIC' => 'OR',  
array('CONTACT.PHONE' => $phoneNumbers),  
array('COMPANY.PHONE' => $phoneNumbers),  
array('CONTACT.EMAIL' => $emailAddresses),  
array('COMPANY.EMAIL' => $emailAddresses)  
);  
  
$arSelect = array('ID');  
  
$arDeals = DealTable::getList(array(  
'order' => array('ID' => 'DESC'),  
'filter' => $arFilter,  
'select' => $arSelect,  
'cache' => array('ttl' => 3600)  
))->fetchAll();  
  
$dealIDs = array();  
foreach ($arDeals as $deal) {  
    $dealIDs[] = $deal['ID'];  
}  
  
// Проверяем, являются ли сделки открытыми и имеют указанное направление  
$filteredDealIDs = array();  
foreach ($dealIDs as $dealID) {  
    $deal = DealTable::getById($dealID)->fetch();  
    if ($deal['CLOSED'] === 'N' && $deal['CATEGORY_ID'] == $dealDirection) {  
        $filteredDealIDs[] = $dealID;  
    }  
}  
  
$rootActivity = $this->GetRootActivity();  
  
$rootActivity->SetVariable("DealIDs", $filteredDealIDs);




#### PHP Code - Получаем все Сделки по Телефонам и Почте, которые закрытые, по направлению

use Bitrix\Crm\DealTable;  
  
$phoneString = "{{Phone}}";  
$emailString = "{{E-mail}}";  
$dealDirection = 0; // Замените на ваше значение CATEGORY_ID направления сделки  
  
$phoneNumbers = explode(", ", $phoneString);  
$emailAddresses = explode(", ", $emailString);  
  
$arFilter = array(  
'LOGIC' => 'OR',  
array('CONTACT.PHONE' => $phoneNumbers),  
array('COMPANY.PHONE' => $phoneNumbers),  
array('CONTACT.EMAIL' => $emailAddresses),  
array('COMPANY.EMAIL' => $emailAddresses)  
);  
  
$arSelect = array('ID');  
  
$arDeals = DealTable::getList(array(  
'order' => array('ID' => 'DESC'),  
'filter' => $arFilter,  
'select' => $arSelect,  
'cache' => array('ttl' => 3600)  
))->fetchAll();  
  
$dealIDs = array();  
foreach ($arDeals as $deal) {  
    $dealIDs[] = $deal['ID'];  
}  
  
// Проверяем, являются ли сделки открытыми и имеют указанное направление  
$filteredDealIDs = array();  
foreach ($dealIDs as $dealID) {  
    $deal = DealTable::getById($dealID)->fetch();  
    if ($deal['CLOSED'] === 'Y' && $deal['CATEGORY_ID'] == $dealDirection) {  
        $filteredDealIDs[] = $dealID;  
    }  
}  
  
$rootActivity = $this->GetRootActivity();  
  
$rootActivity->SetVariable("DealIDs", $filteredDealIDs);



#### PHP Code - Получаем все Комментарии таймлайна по Сделке

use Bitrix\Crm\Timeline\Entity\TimelineTable;  
  
\Bitrix\Main\Loader::includeModule('crm');  
  
$sourceDealId = 31496; // Здесь укажите ID сделки, для которой нужно получить комментарии  
  
// Получаем комментарии по исходной сделке  
$obTimeLineEntity = TimelineTable::getList([  
    'order' => ['CREATED' => 'DESC'],  
    'filter' => [  
        'BINDINGS.ENTITY_ID' => $sourceDealId,  
        '!COMMENT' => false,  
    ],  
    'limit' => 100,  
    'select' => ['ID'],  
]);  
  
$commentData = [];  
while ($arFields = $obTimeLineEntity->fetch()) {  
    $commentData[] = $arFields['ID'];  
}  
  
$rootActivity = $this->GetRootActivity();  
$rootActivity->SetVariable("CommentData", $commentData);


#### PHP Code - Получаем все Комментарии таймлайна по исходной Сделке и создаем их в целевой сделке

use Bitrix\Crm\Timeline\CommentEntry;  
use Bitrix\Crm\Timeline\Entity\TimelineBindingTable;  
  
\Bitrix\Main\Loader::includeModule('crm');  
  
$sourceDealId = 31496; // Здесь укажите ID сделки, для которой нужно получить комментарии  
$targetDealId = 31495; // Здесь укажите ID сделки, в которую нужно создать комментарии  
$authorId = 1; // Здесь укажите ID автора комментариев  
  
// Получаем комментарии по исходной сделке  
$obTimeLineEntity = Bitrix\Crm\Timeline\Entity\TimelineTable::getList([  
    'order' => ['CREATED' => 'DESC'],  
    'filter' => [  
        'BINDINGS.ENTITY_ID' => $sourceDealId,  
        '!COMMENT' => false,  
    ],  
    'limit' => 100,  
    'select' => ['*'],  
]);  
  
$commentData = [];  
while ($arFields = $obTimeLineEntity->fetch()) {  
    if (!empty($arFields['COMMENT'])) {  
        $commentData[] = $arFields;  
    }  
}  
  
// Создаем комментарии в целевой сделке  
foreach ($commentData as $comment) {  
    $commentFields = [  
        'TEXT' => $comment['COMMENT'],  
        'AUTHOR_ID' => $authorId,  
        'BINDINGS' => [  
            [  
                'ENTITY_TYPE_ID' => \CCrmOwnerType::Deal,  
                'ENTITY_ID' => $targetDealId,  
            ],  
        ],  
    ];  
  
    $resId = CommentEntry::create($commentFields);  
}  
  
$rootActivity = $this->GetRootActivity();  
$rootActivity->SetVariable("CommentData", $commentData);


#### PHP Code - Перенос всех комментариев из одной сделки в другую

use Bitrix\Crm\Timeline\Entity\TimelineBindingTable;  
use Bitrix\Crm\Timeline\TimelineType;  
  
$entityTypeID = CCrmOwnerType::Deal; // Тип сущности (например, сделка)  
$oldEntityID = 31495; // Текущий ID сущности  
$newEntityID = 31496; // Новый ID сущности  
  
TimelineBindingTable::rebind($entityTypeID, $oldEntityID, $newEntityID, [TimelineType::COMMENT]);

#### PHP Code - Получаем все Компании

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

#### PHP Code - Удаляем полностью все реквизиты Компании

$ID_COMPANY = "{{ID}}";  
  
//Получаем текущие реквизиты компании  
$requisite = new \Bitrix\Crm\EntityRequisite();  
$requisiteList = $requisite->getList([  
    'filter' => [  
        'ENTITY_ID' => $ID_COMPANY,  
        'ENTITY_TYPE_ID' => '4'  
    ],  
    'select' => ['ID']  
])->fetchAll();  
  
//Если реквизитов нет, то код дальше не выполняется  
if (empty($requisiteList)) {  
    return;  
}  
  
//Если реквизиты есть, то удаляем их  
foreach ($requisiteList as $requisiteItem) {  
    $requisiteId = $requisiteItem['ID'];  
    $requisite->delete($requisiteId);  
}

#### PHP Code - Добавляем или обновляем реквизиты Компании

$ENTITY_ID = "{{ID}}"; //ID Сущности (Контакта или Компании)  
$ENTITY_TYPE_ID = '4'; //ID Типа Сущности: 3 - Контакт, 4 - Компания  
$PRESET_ID = '7'; //ID Шаблона Реквизитов (по умолчанию): Организация - 1, ИП - 3, Физ. лицо - 5  
$IndexRQ = '12345'; //Индекс  
$CountryRQ = 'Страна'; //Страна  
$CityRQ = 'Город'; //Город  
$StreetRQ = 'Улица, номер дома'; //Улица, номер дома  
  
//Задаем переменные только для почтового индекса, города и страны  
$arRequisite["ADDRESS_STREET_NAME"] = $StreetRQ;  
$arRequisite["ADDRESS_HOUSE"] = "";  
$arRequisite["ADDRESS_BUILDING"] = "";  
$arRequisite["ADDRESS_FLAT"] = "";  
$arRequisite["ADDRESS_REGION_NAME"] = $CityRQ;  
$arRequisite["ADDRESS_INDEX"] = $IndexRQ;  
  
//Проверяем, есть ли уже реквизиты у компании  
  
$requisite = new \Bitrix\Crm\EntityRequisite();  
$requisiteList = $requisite->getList([  
    'filter' => [  
        'ENTITY_ID' => $ENTITY_ID,  
        'ENTITY_TYPE_ID' => $ENTITY_TYPE_ID,  
        'PRESET_ID' => $PRESET_ID  
    ],  
    'select' => ['ID']  
])->fetchAll();  
  
//Если реквизиты есть, то обновляем их  
  
if (!empty($requisiteList)) {  
    $requisiteId = $requisiteList[0]['ID'];  
    $fields['ENTITY_ID'] = $ENTITY_ID;  
    $fields['ENTITY_TYPE_ID'] = $ENTITY_TYPE_ID;  
    $fields['PRESET_ID'] = $PRESET_ID;  
    $fields['NAME'] = "{{Company Name}}";  
    $fields['SORT'] = 500;  
    $fields['ACTIVE'] = 'Y';  
    $fields['RQ_COMPANY_NAME'] = "{{Company Name}}";  
    $fields['RQ_COMPANY_FULL_NAME'] = "{{Company Name}}";  
    $requisite->update($requisiteId, $fields);  
}  
//Если реквизитов нет, то добавляем их  
  
else {  
    $fields['ENTITY_ID'] = $ENTITY_ID;  
    $fields['ENTITY_TYPE_ID'] = $ENTITY_TYPE_ID;  
    $fields['PRESET_ID'] = $PRESET_ID;  
    $fields['NAME'] = "{{Company Name}}";  
    $fields['SORT'] = 500;  
    $fields['ACTIVE'] = 'Y';  
    $fields['RQ_COMPANY_NAME'] = "{{Company Name}}";  
    $fields['RQ_COMPANY_FULL_NAME'] = "{{Company Name}}";  
    $requisiteId = $requisite->add($fields)->getId();  
}  
  
$rootActivity = $this->GetRootActivity();  
$rootActivity->SetVariable("res", $requisiteId);  
  
//Добавляем\Обновляем Юридический Адрес в реквизит  
  
if($requisiteId > 0){      
     $address = new \Bitrix\Crm\EntityAddress();  
     $address->register(8, $requisiteId, 6, array(                                                              
         "ADDRESS_1" =>$arRequisite["ADDRESS_STREET_NAME"],  
         "ADDRESS_2" => "",  
         "CITY" => $arRequisite["ADDRESS_REGION_NAME"],  
         "POSTAL_CODE" => $arRequisite["ADDRESS_INDEX"],  
         "COUNTRY" => $CountryRQ  
     ));  
}


#### PHP Code - Получаем все Компании по Телефонам и Почте

use Bitrix\Crm\CompanyTable;  
  
$phoneString = "{{Phone}}";  
$emailString = "{{E-mail}}";  
  
$phoneNumbers = explode(", ", $phoneString);  
$emailAddresses = explode(", ", $emailString);  
  
$arFilter = array(  
'LOGIC' => 'OR',  
array('PHONE' => $phoneNumbers),  
array('EMAIL' => $emailAddresses)  
);  
  
$arSelect = array('ID');  
  
$arCompanies = CompanyTable::getList(array(  
'order' => array('ID' => 'DESC'),  
'filter' => $arFilter,  
'select' => $arSelect,  
'cache' => array('ttl' => 3600)  
))->fetchAll();  
  
$companyIDs = array();  
foreach ($arCompanies as $company) {  
    $companyIDs[] = $company['ID'];  
}  
  
$rootActivity = $this->GetRootActivity();  
  
$rootActivity->SetVariable("CompanyIDs", $companyIDs);

#### PHP Code - Получаем все Контакты по Телефонам и Почте

use Bitrix\Crm\ContactTable;  
  
$phoneString = "{{Phone}}";  
$emailString = "{{E-mail}}";  
  
$phoneNumbers = explode(", ", $phoneString);  
$emailAddresses = explode(", ", $emailString);  
  
$arFilter = array(  
'LOGIC' => 'OR',  
array('PHONE' => $phoneNumbers),  
array('EMAIL' => $emailAddresses)  
);  
  
$arSelect = array('ID');  
  
$arContacts = ContactTable::getList(array(  
'order' => array('ID' => 'DESC'),  
'filter' => $arFilter,  
'select' => $arSelect,  
'cache' => array('ttl' => 3600)  
))->fetchAll();  
  
$contactIDs = array();  
foreach ($arContacts as $contact) {  
    $contactIDs[] = $contact['ID'];  
}  
  
$rootActivity = $this->GetRootActivity();  
  
$rootActivity->SetVariable("ContactIDs", $contactIDs);
