// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../../types/input";
import * as outputs from "../../../types/output";
import * as enums from "../../../types/enums";
import * as utilities from "../../../utilities";

/**
 * Lease defines a lease concept.
 */
export interface Lease {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion: "coordination.k8s.io/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind: "Lease";
    /**
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata: outputs.meta.v1.ObjectMeta;
    /**
     * Specification of the Lease. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    spec: outputs.coordination.v1beta1.LeaseSpec;
}

/**
 * LeaseSpec is a specification of a Lease.
 */
export interface LeaseSpec {
    /**
     * acquireTime is a time when the current lease was acquired.
     */
    acquireTime: string;
    /**
     * holderIdentity contains the identity of the holder of a current lease.
     */
    holderIdentity: string;
    /**
     * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.
     */
    leaseDurationSeconds: number;
    /**
     * leaseTransitions is the number of transitions of a lease between holders.
     */
    leaseTransitions: number;
    /**
     * renewTime is a time when the current holder of a lease has last updated the lease.
     */
    renewTime: string;
}

/**
 * LeaseSpec is a specification of a Lease.
 */
export interface LeaseSpecPatch {
    /**
     * acquireTime is a time when the current lease was acquired.
     */
    acquireTime: string;
    /**
     * holderIdentity contains the identity of the holder of a current lease.
     */
    holderIdentity: string;
    /**
     * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.
     */
    leaseDurationSeconds: number;
    /**
     * leaseTransitions is the number of transitions of a lease between holders.
     */
    leaseTransitions: number;
    /**
     * renewTime is a time when the current holder of a lease has last updated the lease.
     */
    renewTime: string;
}

