FROM nginx:latest

EXPOSE 80

COPY ./dist/vite-front-test.tar /usr/share/nginx/html/vite-front-test.tar

WORKDIR /usr/share/nginx/html

RUN tar xvf vite-front-test.tar

RUN rm -rf vite-front-test.tar

# yarn install
# yarn build
# tar cvf vite-front-test.tar ./dist/
# docker build -t vite-front-test .