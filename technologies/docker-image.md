# Docker

Docker leverages operating system-level virtualization, specifically containerization. It utilizes the kernel's process isolation features like namespaces and control groups (cgroups) to create lightweight containers. Each container encapsulates an application with its necessary libraries and dependencies, sharing the underlying host kernel. This reduces resource overhead compared to full virtual machines, promoting portability and efficient application deployment.

## Pro

## Con

```
group: "packaging"
name: "Docker Image"
status: "ADOPT"
depends-on:
 - "gradle.md"
 - "maven.md"
followed-by: 
```