# Base image set here, not in build.yaml: newer Supervisors reject a short name like node:22-alpine there and
# fall back to their s6-overlay base image, which can't start under init: true (issue #1).
FROM docker.io/library/node:22-alpine
ARG BUILD_VERSION
# The monitor itself, from its tagged release (Node, no dependencies).
WORKDIR /app
RUN wget -qO- "https://github.com/jchisholm59/adsb-monitor/archive/refs/tags/v${BUILD_VERSION}.tar.gz" | tar xz --strip-components=1 \
    && rm -rf docs .github
COPY start.js /start.js
CMD ["node", "/start.js"]
