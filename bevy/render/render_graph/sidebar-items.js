window.SIDEBAR_ITEMS = {"enum":[["Edge","An edge, which connects two `Nodes` in a `RenderGraph`."],["EdgeExistence",""],["InputSlotError",""],["NodeLabel","A [`NodeLabel`] is used to reference a [`NodeState`] by either its name or [`NodeId`] inside the `RenderGraph`."],["NodeRunError",""],["OutputSlotError",""],["RenderGraphError",""],["RunSubGraphError",""],["SlotLabel","A [`SlotLabel`] is used to reference a slot by either its name or index inside the `RenderGraph`."],["SlotType","Describes the render resources created (output) or used (input) by the render `Nodes`."],["SlotValue","A value passed between render `Nodes`. Corresponds to the [`SlotType`] specified in the `RenderGraph`."]],"struct":[["Edges","A collection of input and output `Edges` for a [`Node`]."],["EmptyNode","A [`Node`] without any inputs, outputs and subgraphs, which does nothing when run. Used (as a label) to bundle multiple dependencies into one inside the `RenderGraph`."],["GraphInputNode","A [`Node`] which acts as an entry point for a [`RenderGraph`] with custom inputs. It has the same input and output slots and simply copies them over when run."],["NodeId",""],["NodeState","The internal representation of a [`Node`], with all data required by the `RenderGraph`."],["RenderGraph","The render graph configures the modular, parallel and re-usable render logic. It is a retained and stateless (nodes themselves may have their own internal state) structure, which can not be modified while it is executed by the graph runner."],["RenderGraphContext","The context with all graph information required to run a `Node`. This context is created for each node by the `RenderGraphRunner`."],["RunGraphOnViewNode","A `RenderGraph` [`Node`] that runs the configured graph name once. This makes it easier to insert sub-graph runs into a graph."],["RunSubGraph","A command that signals the graph runner to run the sub graph corresponding to the `name` with the specified `inputs` next."],["SlotInfo","The internal representation of a slot, which specifies its [`SlotType`] and name."],["SlotInfos","A collection of input or output `SlotInfos` for a `NodeState`."]],"trait":[["Node","A render node that can be added to a `RenderGraph`."]]};