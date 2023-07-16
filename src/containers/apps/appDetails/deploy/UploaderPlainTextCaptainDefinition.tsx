import UploaderPlainTextBase from './UploaderPlainTextBase'

export default class UploaderPlainTextAthenaDefinition extends UploaderPlainTextBase {
    protected getPlaceHolderValue() {
        return `{
    "schemaVersion" :2 ,
    "imageName" : "mysql:5.7
}`
    }

    protected convertDataToAthenaDefinition(userEnteredValue: string) {
        return userEnteredValue.trim()
    }
}
