FROM alpine:3.6
RUN apk add --no-cache curl

COPY data/CCD_Definition_CMC.xlsx /definition.xlsx
COPY upload-definition.sh /upload-definition.sh
COPY create-importer-user.sh /create-importer-user.sh
COPY add-ccd-role.sh /add-ccd-role.sh
COPY import-definition.sh /import-definition.sh

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.0.0/wait /wait
RUN ["chmod", "+x", "/wait"]

RUN ["chmod", "+x", "/create-importer-user.sh"]
RUN ["chmod", "+x", "/add-ccd-role.sh"]
RUN ["chmod", "+x", "/import-definition.sh"]
RUN ["chmod", "+x", "/upload-definition.sh"]

CMD "/wait" && "/upload-definition.sh"
