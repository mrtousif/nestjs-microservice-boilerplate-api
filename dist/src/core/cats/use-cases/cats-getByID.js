"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsGetByIdUsecase = exports.CatsGetByIdSchema = void 0;
const cats_1 = require("../entity/cats");
const validate_schema_decorator_1 = require("../../../utils/decorators/validate-schema.decorator");
const exception_1 = require("../../../utils/exception");
const cats_2 = require("../entity/cats");
exports.CatsGetByIdSchema = cats_1.CatsEntitySchema.pick({
    id: true
});
class CatsGetByIdUsecase {
    constructor(catsRepository) {
        this.catsRepository = catsRepository;
    }
    async execute({ id }) {
        const cats = await this.catsRepository.findById(id);
        if (!cats) {
            throw new exception_1.ApiNotFoundException();
        }
        return new cats_2.CatsEntity(cats);
    }
}
exports.CatsGetByIdUsecase = CatsGetByIdUsecase;
__decorate([
    (0, validate_schema_decorator_1.ValidateSchema)(exports.CatsGetByIdSchema),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatsGetByIdUsecase.prototype, "execute", null);
//# sourceMappingURL=cats-getByID.js.map