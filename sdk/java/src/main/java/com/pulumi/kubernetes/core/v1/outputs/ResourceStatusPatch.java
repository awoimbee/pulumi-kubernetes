// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.kubernetes.core.v1.outputs;

import com.pulumi.core.annotations.CustomType;
import com.pulumi.kubernetes.core.v1.outputs.ResourceHealthPatch;
import java.lang.String;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;

@CustomType
public final class ResourceStatusPatch {
    /**
     * @return Name of the resource. Must be unique within the pod and match one of the resources from the pod spec.
     * 
     */
    private @Nullable String name;
    /**
     * @return List of unique Resources health. Each element in the list contains an unique resource ID and resource health. At a minimum, ResourceID must uniquely identify the Resource allocated to the Pod on the Node for the lifetime of a Pod. See ResourceID type for it&#39;s definition.
     * 
     */
    private @Nullable List<ResourceHealthPatch> resources;

    private ResourceStatusPatch() {}
    /**
     * @return Name of the resource. Must be unique within the pod and match one of the resources from the pod spec.
     * 
     */
    public Optional<String> name() {
        return Optional.ofNullable(this.name);
    }
    /**
     * @return List of unique Resources health. Each element in the list contains an unique resource ID and resource health. At a minimum, ResourceID must uniquely identify the Resource allocated to the Pod on the Node for the lifetime of a Pod. See ResourceID type for it&#39;s definition.
     * 
     */
    public List<ResourceHealthPatch> resources() {
        return this.resources == null ? List.of() : this.resources;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static Builder builder(ResourceStatusPatch defaults) {
        return new Builder(defaults);
    }
    @CustomType.Builder
    public static final class Builder {
        private @Nullable String name;
        private @Nullable List<ResourceHealthPatch> resources;
        public Builder() {}
        public Builder(ResourceStatusPatch defaults) {
    	      Objects.requireNonNull(defaults);
    	      this.name = defaults.name;
    	      this.resources = defaults.resources;
        }

        @CustomType.Setter
        public Builder name(@Nullable String name) {

            this.name = name;
            return this;
        }
        @CustomType.Setter
        public Builder resources(@Nullable List<ResourceHealthPatch> resources) {

            this.resources = resources;
            return this;
        }
        public Builder resources(ResourceHealthPatch... resources) {
            return resources(List.of(resources));
        }
        public ResourceStatusPatch build() {
            final var _resultValue = new ResourceStatusPatch();
            _resultValue.name = name;
            _resultValue.resources = resources;
            return _resultValue;
        }
    }
}
