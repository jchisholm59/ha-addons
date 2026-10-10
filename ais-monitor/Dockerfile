ARG BUILD_FROM
FROM ${BUILD_FROM}
ARG BUILD_VERSION
# The monitor itself, from its tagged release (Node, no dependencies).
WORKDIR /app
RUN wget -qO- "https://github.com/jchisholm59/ais-monitor/archive/refs/tags/v${BUILD_VERSION}.tar.gz" | tar xz --strip-components=1 \
    && rm -rf docs .github
COPY start.js /start.js
CMD ["node", "/start.js"]
