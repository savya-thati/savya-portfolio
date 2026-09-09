export const PROJECTS = [
    {
        title: "Agentic OS: Multi-Agent Orchestration Platform",
        description: "Architected a production-grade multi-agent runtime using FastAPI, LangGraph, and Redis. Features intent classification routing, fail-fast Redis heartbeat checks (<10ms), Goal Shield context restoration to prevent session drift, LinUCB contextual bandit for adaptive cognitive retrieval, and durable PostgreSQL TreeStore execution trees.",
        tag: "Autonomous Agents & Orchestration",
        stack: ["Python", "LangGraph", "FastAPI", "Redis", "pgvector", "PostgreSQL", "Docker"],
        link: "https://github.com/savyasachi6/agentic_os"
    },
    {
        title: "Cost-Efficient LLM Serving & IPC Memory Pooling",
        description: "Engineered a low-latency LLM serving platform featuring kvcached, an IPC sidecar daemon sharing pre-allocated GPU VRAM across processes via local Unix domain sockets to eliminate OOM crashes. Integrated multi-engine vLLM inference with dynamic multi-LoRA adapter hot-swapping, Radix prefix caching, and speculative decoding.",
        tag: "LLM Systems & High-Throughput Inference",
        stack: ["Python", "vLLM", "C++", "gRPC", "Docker", "Kubernetes", "CUDA"],
        link: "https://github.com/savyasachi6/Cost-efficient-LLM-serving"
    },
    {
        title: "Intel NPU On-Device LLM Service & Quantized Inference",
        description: "Developed an on-device local LLM execution engine leveraging Intel Neural Processing Units (NPUs) built into Intel Core Ultra processors. Utilized ipex-llm for INT4 hardware-quantized inference, exposing an Ollama-compatible REST API and Streamlit interface integrated as an automated Windows background service.",
        tag: "Edge AI & Hardware Acceleration",
        stack: ["Python", "Intel NPU (IPEX-LLM)", "FastAPI", "INT4 Quantization", "Streamlit"],
        link: "https://github.com/savyasachi6/npu_llm"
    },
    {
        title: "Embodied Agent: Voice-Directed Mobile Robot Control",
        description: "Built an embodied AI system transforming natural language voice instructions into real-time autonomous robot control using local Qwen3 LLMs and ROS2. Implemented hierarchical reasoning to parse spatial intent, check real-time sensor states, and generate safe obstacle-avoiding navigation trajectories.",
        tag: "Embodied AI & Robotics",
        stack: ["ROS2", "Python", "Local LLMs (Qwen3)", "Ollama", "Robotics Navigation"],
        link: "https://github.com/savyasachi6/robot_llm_control"
    },
    {
        title: "Production Hybrid RAG Engine with Policy Guards",
        description: "Designed an enterprise document intelligence and retrieval platform combining pgvector dense semantic embeddings with PostgreSQL full-text search via Reciprocal Rank Fusion (RRF). Enforced multi-stage LLM output validation (Gatekeeper & Auditor agents) to filter hallucinations and verify context provenance.",
        tag: "Enterprise RAG & Data Systems",
        stack: ["Python", "pgvector", "PostgreSQL", "FastAPI", "FAISS", "LangChain"],
        link: "https://github.com/savyasachi6/ai-research-assistant"
    },
    {
        title: "GPU-Accelerated PPO Navigation & Sim-to-Real RL",
        description: "Engineered deep reinforcement learning navigation agents in NVIDIA Isaac Sim and ROS2 using PPO with GPU-accelerated parallel environments. Resolved action oscillation artifacts through potential-based reward shaping, curriculum learning, and trajectory prediction for dynamic obstacle avoidance.",
        tag: "Deep Reinforcement Learning",
        stack: ["Python", "PyTorch", "Isaac Sim", "ROS2", "PPO", "CUDA"],
        link: "https://github.com/savyasachi6/nova-carter-rl-ppo-navigation"
    }
];
