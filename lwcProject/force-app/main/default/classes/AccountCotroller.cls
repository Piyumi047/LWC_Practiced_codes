public with sharing class AccountCotroller {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return[Select ID,Name,Type,Industry FROM Account LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountType(String type){
        return[Select ID,Name,Type FROM Account where Type=:type LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey){
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, Type, Industry FROM Account WHERE Name LIKE :key LIMIT 5];
    }
}
