import { IAthenaDefinition } from '../../../../models/IAthenaDefinition'
import UploaderPlainTextBase from './UploaderPlainTextBase'

export default class UploaderPlainTextDockerfile extends UploaderPlainTextBase {
    protected getPlaceHolderValue() {
        return `# Derived from official mysql image (our base image)
FROM mysql:5.7
# Add a database
ENV MYSQL_DATABASE company`
    }

    protected convertDataToAthenaDefinition(userEnteredValue: string) {
        const capDefinition: IAthenaDefinition = {
            schemaVersion: 2,
            dockerfileLines: userEnteredValue.trim().split('\n'),
        }

        return JSON.stringify(capDefinition)
    }
}
