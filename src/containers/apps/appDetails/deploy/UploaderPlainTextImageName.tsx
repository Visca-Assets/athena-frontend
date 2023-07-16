import { IAthenaDefinition } from '../../../../models/IAthenaDefinition'
import UploaderPlainTextBase from './UploaderPlainTextBase'

export default class UploaderPlainTextImageName extends UploaderPlainTextBase {
    protected getPlaceHolderValue() {
        return `nginxdemos/hello:latest`
    }

    protected isSingleLine() {
        return true
    }

    protected convertDataToAthenaDefinition(userEnteredValue: string) {
        const capDefinition: IAthenaDefinition = {
            schemaVersion: 2,
            imageName: userEnteredValue.trim(),
        }

        return JSON.stringify(capDefinition)
    }
}
