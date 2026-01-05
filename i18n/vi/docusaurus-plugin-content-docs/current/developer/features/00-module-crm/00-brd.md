---
id: crm-brd
title: BRD - Module CRM
sidebar_label: BRD
sidebar_position: 1
description: Tài liệu Yêu cầu Nghiệp vụ cho Module CRM - Quản lý Cho thuê Khu Công nghiệp
---

# Tài liệu Yêu cầu Nghiệp vụ (BRD)
## Module CRM - Quản lý Cho thuê Khu Công nghiệp

---

## 1. Tổng quan Tài liệu

### 1.1 Mục đích
Tài liệu này xác định các yêu cầu nghiệp vụ cho module Quản lý Quan hệ Khách hàng (CRM) của hệ thống ERP Khu Công nghiệp IDICO. Module CRM được thiết kế để quản lý toàn bộ vòng đời thu hút khách thuê và quản lý quan hệ cho hoạt động cho thuê khu công nghiệp.

### 1.2 Phạm vi
Module CRM bao gồm quản lý nội bộ các hoạt động:
- Quản lý liên hệ và tổ chức
- Tạo và phân loại khách hàng tiềm năng
- Theo dõi cơ hội và quản lý pipeline
- Lên lịch và thực hiện tham quan
- Quản lý thỏa thuận MOU (Biên bản Ghi nhớ)
- Hoàn tất và thực hiện hợp đồng

### 1.3 Các Bên Liên quan
- **Đội ngũ Kinh doanh**: Người dùng chính quản lý quan hệ khách thuê
- **Quản lý Kinh doanh**: Giám sát pipeline và dự báo
- **Đội ngũ Pháp lý**: Xem xét MOU và hợp đồng
- **Đội ngũ Vận hành**: Điều phối tham quan
- **Ban Giám đốc**: Ra quyết định chiến lược và báo cáo
- **Đội ngũ Tài chính**: Phê duyệt điều khoản hợp đồng và giá cả

---

## 2. Bối cảnh Nghiệp vụ

### 2.1 Mô hình Kinh doanh Cho thuê Khu Công nghiệp
Khu công nghiệp cung cấp đất đai và cơ sở vật chất cho các doanh nghiệp (khách thuê) trên cơ sở cho thuê dài hạn. Quá trình cho thuê bao gồm nhiều giai đoạn từ tiếp xúc ban đầu đến thực hiện hợp đồng, thường kéo dài từ vài tuần đến vài tháng.

### 2.2 Thách thức Hiện tại
- Theo dõi thủ công các khách hàng tiềm năng và cơ hội trên bảng tính
- Thiếu khả năng hiển thị pipeline bán hàng
- Khó khăn trong việc điều phối tham quan và theo dõi
- Quản lý tài liệu không hiệu quả cho MOU và hợp đồng
- Khả năng báo cáo và phân tích hạn chế
- Dữ liệu về liên hệ và tổ chức không nhất quán
- Không có quy trình tiêu chuẩn để phân loại khách hàng tiềm năng
- **Thay đổi tổ chức trong quá trình bán hàng**: Khó khăn trong việc theo dõi khi tổ chức ký hợp đồng khác với tổ chức liên hệ ban đầu (ví dụ: liên hệ ban đầu từ Công ty A, nhưng hợp đồng cuối cùng được ký bởi Công ty B do quan hệ công ty mẹ/công ty con hoặc tái cấu trúc doanh nghiệp)

### 2.3 Mục tiêu Kinh doanh
- Hợp lý hóa quy trình thu hút khách thuê
- Tăng khả năng hiển thị pipeline bán hàng
- Cải thiện tỷ lệ chuyển đổi ở mỗi giai đoạn
- Giảm chi phí quản lý
- Cho phép ra quyết định dựa trên dữ liệu
- Đảm bảo trải nghiệm khách hàng nhất quán
- Tạo điều kiện hợp tác giữa các nhóm

---

## 3. Quy trình CRM

Module CRM tuân theo quy trình làm việc có cấu trúc đại diện cho vòng đời thu hút khách thuê:

```
Liên hệ → Tổ chức → Khách hàng tiềm năng → Cơ hội → Tham quan → Thỏa thuận MOU → Hợp đồng
```

### 3.1 Định nghĩa Giai đoạn Quy trình

**Liên hệ (Contact)**: Một cá nhân đại diện hoặc được liên kết với một tổ chức khách thuê tiềm năng. Đây có thể là đại diện công ty, người ra quyết định hoặc nhân viên.

**Tổ chức (Organization)**: Một thực thể kinh doanh (công ty, tập đoàn, doanh nghiệp) có thể trở thành khách thuê. Nhiều liên hệ có thể được liên kết với một tổ chức.

**Khách hàng tiềm năng (Lead)**: Một khách thuê tiềm năng đủ điều kiện (tổ chức) đã bày tỏ sự quan tâm đến việc thuê không gian trong khu công nghiệp.

**Cơ hội (Opportunity)**: Một cơ hội cho thuê cụ thể với các yêu cầu được xác định (diện tích đất, vị trí, thời gian, v.v.) liên quan đến một khách hàng tiềm năng.

**Tham quan (Site Visit)**: Một chuyến tham quan theo lịch để khách hàng tiềm năng khảo sát các cơ sở và khu đất có sẵn của khu công nghiệp.

**Thỏa thuận MOU (MOU Agreement)**: Một Biên bản Ghi nhớ chính thức được soạn thảo và đàm phán với khách hàng tiềm năng trước hợp đồng cuối cùng.

**Hợp đồng (Contract)**: Thỏa thuận cho thuê cuối cùng được thực hiện giữa IDICO và khách thuê.

### 3.2 Kịch bản Đa Tổ chức

**Trường hợp Kinh doanh**: Trong các tình huống thực tế, tổ chức tham gia vào đầu quá trình bán hàng có thể khác với tổ chức cuối cùng ký hợp đồng. Hệ thống CRM phải đáp ứng được sự phức tạp này.

**Ví dụ Kịch bản Phổ biến**:
1. **Liên hệ Ban đầu**: Ông Nguyễn (Liên hệ) từ **Công ty A Ltd.** thực hiện yêu cầu ban đầu
2. **Giai đoạn Khách hàng tiềm năng**: Khách hàng tiềm năng được tạo và phân loại với Công ty A là tổ chức chính
3. **Giai đoạn Cơ hội**: Cơ hội tiến triển với Công ty A đánh giá các khu đất
4. **Tham quan**: Đại diện Công ty A thực hiện tham quan
5. **Giai đoạn MOU**: MOU được soạn thảo và ký với **Công ty A Ltd.**
6. **Giai đoạn Hợp đồng**: Hợp đồng cho thuê cuối cùng được ký với **Công ty B Corp.** (tổ chức khác)

**Lý do Thay đổi Tổ chức**:
- **Cấu trúc Công ty mẹ-Công ty con**: Liên hệ ban đầu từ công ty con, nhưng công ty mẹ ký hợp đồng
- **Tái cấu trúc Doanh nghiệp**: Tổ chức lại công ty trong thời gian đàm phán
- **Công ty Mục đích Đặc biệt (SPV)**: Khách hàng tạo thực thể pháp lý mới đặc biệt cho hợp đồng thuê
- **Công ty Anh em**: Các thực thể khác nhau trong cùng tập đoàn xử lý các giai đoạn khác nhau
- **Đại diện/Đại lý**: Liên hệ ban đầu đóng vai trò đại diện/tư vấn cho người thuê thực tế
- **Liên doanh**: Nhiều tổ chức cùng nhau thành lập thực thể mới cho hợp đồng

**Yêu cầu Hệ thống**:
- Hỗ trợ nhiều tổ chức trong suốt vòng đời của một cơ hội
- Theo dõi tổ chức nào tham gia vào mỗi giai đoạn
- Duy trì đầy đủ lịch sử kiểm toán các thay đổi tổ chức
- Cho phép một liên hệ đại diện cho nhiều tổ chức
- Cho phép chuyển giao suôn sẻ giữa các tổ chức mà không mất tính liên tục của quy trình
- Cảnh báo người dùng khi có thay đổi tổ chức
- Yêu cầu tài liệu/phê duyệt cho thay đổi tổ chức ở các giai đoạn quan trọng (MOU sang Hợp đồng)

---

## 4. Yêu cầu Chức năng

### 4.1 Quản lý Liên hệ

#### 4.1.1 Khả năng Cốt lõi
- **Tạo và lưu trữ hồ sơ liên hệ** với các trường sau:
  - Họ tên đầy đủ (bắt buộc)
  - Chức danh/vị trí
  - Địa chỉ email (bắt buộc)
  - Số điện thoại (bắt buộc)
  - Số di động
  - Phương thức liên hệ thay thế (LinkedIn, v.v.)
  - Tổ chức liên quan (liên kết đến bản ghi Tổ chức)
  - Loại liên hệ (Người ra quyết định chính, Người ảnh hưởng, Nhân viên, v.v.)
  - Ngôn ngữ ưa thích
  - Ghi chú/nhận xét

- **Theo dõi nguồn liên hệ**: Ghi lại cách thức thu thập liên hệ (giới thiệu, trang web, hội chợ thương mại, tiếp cận trực tiếp, v.v.)

- **Lịch sử giao tiếp**: Ghi lại tất cả các tương tác với liên hệ
  - Cuộc gọi, email, cuộc họp
  - Ngày, giờ, chủ đề, kết quả
  - Tệp/tài liệu đính kèm

- **Quan hệ liên hệ**: Ánh xạ mối quan hệ giữa các liên hệ trong cùng hoặc khác tổ chức

- **Liên kết đa tổ chức**:
  - Liên kết một liên hệ với nhiều tổ chức đồng thời
  - Xác định vai trò/mối quan hệ cho mỗi liên kết tổ chức (Nhân viên, Tư vấn, Giám đốc, Đại diện, Đại lý, v.v.)
  - Theo dõi trạng thái hoạt động/không hoạt động cho mỗi mối quan hệ tổ chức
  - Ghi lại ngày bắt đầu và kết thúc cho mỗi liên kết
  - Chỉ định tổ chức chính cho mỗi liên hệ

#### 4.1.2 Quy tắc Nghiệp vụ
- Một liên hệ phải có ít nhất tên, email và số điện thoại
- **Một liên hệ có thể được liên kết với nhiều tổ chức đồng thời** (quan trọng cho các kịch bản đa tổ chức)
- Mỗi mối quan hệ liên hệ-tổ chức phải chỉ định vai trò và loại mối quan hệ
- Địa chỉ email phải là duy nhất cho mỗi liên hệ
- Phát hiện trùng lặp nên cảnh báo người dùng khi tạo liên hệ tương tự
- Khi một liên hệ tham gia vào một cơ hội, tất cả các tổ chức liên quan của họ nên hiển thị cho người dùng

### 4.2 Quản lý Tổ chức

#### 4.2.1 Khả năng Cốt lõi
- **Tạo và duy trì hồ sơ tổ chức** với:
  - Tên tổ chức (bắt buộc)
  - Số đăng ký kinh doanh/Mã số thuế
  - Ngành/lĩnh vực
  - Loại hình kinh doanh (sản xuất, logistics, R&D, v.v.)
  - Quy mô tổ chức (nhân viên, doanh thu)
  - Địa chỉ trụ sở chính
  - Trang web
  - Số điện thoại chính
  - Các liên hệ liên quan (nhiều)
  - Công ty mẹ (nếu có)
  - Công ty con
  - Ghi chú/nhận xét

- **Phân cấp tổ chức**: Theo dõi quan hệ công ty mẹ-công ty con

- **Quan hệ giữa các tổ chức**:
  - Công ty mẹ
  - Công ty con (một-nhiều)
  - Công ty anh em (các thực thể liên quan dưới cùng một công ty mẹ)
  - Công ty liên quan (liên doanh, đối tác)
  - Loại quan hệ (Mẹ, Con, Anh em, SPV, Đại lý/Đại diện, Đối tác, v.v.)
  - Ngày bắt đầu/kết thúc quan hệ
  - Tỷ lệ sở hữu (nếu có)
  - Sơ đồ/phân cấp tổ chức trực quan

- **Phân loại tổ chức**:
  - Phân loại ngành
  - Tầng quy mô công ty
  - Xếp hạng tín dụng/chỉ số tài chính

- **Lịch sử tổ chức**: Theo dõi tất cả các hoạt động và điểm tiếp xúc với tổ chức

- **Theo dõi cơ hội đa tổ chức**:
  - Xem tất cả các cơ hội mà tổ chức này tham gia (với tư cách tổ chức ban đầu, tổ chức hiện tại hoặc tổ chức liên quan)
  - Theo dõi vai trò của tổ chức trong mỗi cơ hội
  - Lịch sử thay thế/thay đổi tổ chức

#### 4.2.2 Quy tắc Nghiệp vụ
- Tên tổ chức và số đăng ký kinh doanh là bắt buộc
- Số đăng ký kinh doanh phải là duy nhất
- Một tổ chức có thể có nhiều liên hệ với các vai trò khác nhau
- Ít nhất một liên hệ nên được chỉ định là liên hệ chính
- **Tổ chức có thể có mối quan hệ với các tổ chức khác** (công ty mẹ/con/anh em)
- Khi một tổ chức được thay thế trong một cơ hội, hệ thống nên đề xuất các tổ chức liên quan (mẹ, con, anh em)
- Quan hệ vòng tròn (ví dụ: A là mẹ của B, và B là mẹ của A) phải được ngăn chặn

### 4.3 Quản lý Khách hàng Tiềm năng

#### 4.3.1 Khả năng Cốt lõi
- **Tạo khách hàng tiềm năng**: Chuyển đổi một tổ chức thành khách hàng tiềm năng khi họ bày tỏ sự quan tâm

- **Thông tin khách hàng tiềm năng**:
  - **Tổ chức chính** (bắt buộc) - tổ chức ban đầu bày tỏ sự quan tâm
  - **Tổ chức liên quan** (tùy chọn) - các tổ chức khác có thể tham gia (mẹ, con, v.v.)
  - Liên hệ chính (bắt buộc)
  - Nguồn khách hàng tiềm năng (yêu cầu trang web, giới thiệu, sự kiện, cuộc gọi trực tiếp, v.v.)
  - Trạng thái khách hàng tiềm năng (Mới, Đã liên hệ, Đủ điều kiện, Không đủ điều kiện, Nuôi dưỡng)
  - Mức độ quan tâm (Nóng, Ấm, Lạnh)
  - Yêu cầu đất/cơ sở ước tính
  - Phạm vi ngân sách ước tính
  - Thời gian mong muốn
  - Nhu cầu/yêu cầu cụ thể
  - Thông tin đối thủ cạnh tranh
  - Đại diện bán hàng được chỉ định (bắt buộc)
  - Điểm khách hàng tiềm năng (tự động hoặc thủ công)
  - **Ghi chú tổ chức**: Ghi lại nếu thực thể ký hợp đồng cuối cùng có thể khác với tổ chức chính

- **Phân loại khách hàng tiềm năng**: Quy trình có cấu trúc để phân loại khách hàng tiềm năng
  - Xác nhận ngân sách
  - Quyền ra quyết định
  - Xác thực nhu cầu
  - Đánh giá thời gian

- **Chấm điểm khách hàng tiềm năng**: Gán điểm dựa trên:
  - Mức độ tương tác
  - Quy mô và ngành của tổ chức
  - Phù hợp ngân sách
  - Tính cấp bách của thời gian
  - Giá trị chiến lược

- **Nuôi dưỡng khách hàng tiềm năng**: Theo dõi các hoạt động theo dõi và chiến dịch cho khách hàng tiềm năng chưa sẵn sàng tiến hành

- **Chuyển đổi khách hàng tiềm năng**: Chuyển đổi khách hàng tiềm năng đủ điều kiện thành cơ hội

#### 4.3.2 Quy tắc Nghiệp vụ
- Một khách hàng tiềm năng phải được liên kết với một tổ chức chính và liên hệ chính
- **Nhiều tổ chức liên quan có thể được liên kết với một khách hàng tiềm năng** để phù hợp với cấu trúc doanh nghiệp
- Trạng thái khách hàng tiềm năng phải được cập nhật trong vòng 48 giờ sau bất kỳ tương tác nào
- Chỉ khách hàng tiềm năng đủ điều kiện mới có thể được chuyển đổi thành cơ hội
- Đại diện bán hàng phải được chỉ định cho tất cả khách hàng tiềm năng đang hoạt động
- Điểm khách hàng tiềm năng nên được tính toán lại tự động dựa trên các hoạt động và cập nhật
- Trong quá trình phân loại khách hàng tiềm năng, đại diện bán hàng nên xác định và ghi lại các thay đổi tổ chức tiềm năng (ví dụ: nếu công ty mẹ sẽ ký thay vì công ty con)

### 4.4 Quản lý Cơ hội

#### 4.4.1 Khả năng Cốt lõi
- **Tạo cơ hội**: Tạo cơ hội từ khách hàng tiềm năng đủ điều kiện

- **Chi tiết cơ hội**:
  - Tên/tiêu đề cơ hội (bắt buộc)
  - Khách hàng tiềm năng liên quan (bắt buộc)
  - **Tổ chức ban đầu** (bắt buộc) - tổ chức khi cơ hội được tạo
  - **Tổ chức hiện tại** (bắt buộc) - tổ chức đang hoạt động cho cơ hội này
  - **Lịch sử tổ chức** - lịch sử kiểm toán tất cả các thay đổi tổ chức với:
    - Tổ chức trước đó
    - Tổ chức mới
    - Ngày thay đổi
    - Lý do thay đổi
    - Người dùng thực hiện thay đổi
    - Giai đoạn khi có thay đổi
    - Tài liệu hỗ trợ
  - **Tổ chức liên quan** - tất cả các tổ chức liên quan hoặc có khả năng liên quan
  - Liên hệ chính (có thể thay đổi khi tổ chức thay đổi)
  - Lịch sử liên hệ (theo dõi thay đổi liên hệ)
  - Giai đoạn cơ hội (Phân loại, Đề xuất, Đàm phán, Đóng Thắng, Đóng Thua)
  - Yêu cầu đất/cơ sở:
    - Diện tích đất (hecta hoặc m²)
    - Loại cơ sở (chỉ đất, cơ sở đã xây, xây theo yêu cầu)
    - Vị trí/khu vực ưa thích
    - Yêu cầu cơ sở hạ tầng
  - Thông tin tài chính:
    - Giá trị giao dịch ước tính
    - Thời hạn thuê đề xuất (năm)
    - Giá thuê đề xuất
    - Điều khoản thanh toán
  - Thời gian:
    - Ngày quyết định dự kiến
    - Ngày chuyển đến mong muốn
  - Mức độ xác suất/tự tin (%)
  - Thông tin cạnh tranh
  - Giai đoạn bán hàng
  - Bước tiếp theo
  - Đội ngũ bán hàng được chỉ định

- **Quản lý pipeline**:
  - Chế độ xem pipeline/phễu trực quan
  - Kéo và thả để tiến triển giai đoạn
  - Các trường và hành động bắt buộc theo giai đoạn

- **Quản lý đề xuất**:
  - Tạo và theo dõi đề xuất
  - Kiểm soát phiên bản cho đề xuất
  - Quy trình phê duyệt

- **Theo dõi cơ hội**:
  - Dòng thời gian hoạt động
  - Kho tài liệu
  - Tích hợp email
  - Quản lý tác vụ

- **Quản lý thay đổi tổ chức**:
  - **Chức năng thay đổi tổ chức**:
    - Chọn tổ chức mới (với đề xuất từ các tổ chức liên quan)
    - Ghi lại lý do thay đổi
    - Đính kèm tài liệu hỗ trợ
    - Yêu cầu phê duyệt dựa trên giai đoạn (ví dụ: thay đổi tổ chức trong giai đoạn MOU/Hợp đồng yêu cầu phê duyệt quản lý)
    - Thông báo cho các bên liên quan
  - **Chế độ xem so sánh tổ chức**: So sánh chi tiết tổ chức ban đầu và hiện tại
  - **Cảnh báo**: Cảnh báo hệ thống khi có thay đổi tổ chức
  - **Chỉ báo quan hệ**: Chỉ báo trực quan hiển thị mối quan hệ giữa các tổ chức (mẹ, con, v.v.)

#### 4.4.2 Quy tắc Nghiệp vụ
- Cơ hội phải tiến triển qua các giai đoạn được xác định tuần tự
- Mỗi giai đoạn yêu cầu thông tin cụ thể được hoàn thành trước khi tiến hành
- Giá trị và xác suất của cơ hội phải được cập nhật khi giai đoạn thay đổi
- Cơ hội thua phải bao gồm lý do thua
- Cơ hội thắng tự động kích hoạt quy trình tạo hợp đồng
- **Thay đổi tổ chức**:
  - Một cơ hội phải luôn có một tổ chức hiện tại
  - Thay đổi tổ chức phải được ghi lại với lý do
  - Tổ chức ban đầu không thể thay đổi (cho hồ sơ lịch sử)
  - Thay đổi tổ chức ở giai đoạn MOU hoặc Hợp đồng yêu cầu phê duyệt quản lý
  - Khi tổ chức thay đổi, hệ thống nên xác minh tất cả các tài liệu liên quan được cập nhật
  - Hệ thống nên cảnh báo nếu tổ chức MOU khác với tổ chức Hợp đồng
  - Tất cả các thay đổi tổ chức phải được ghi lại trong lịch sử kiểm toán
- **Tính linh hoạt của liên hệ**: Liên hệ chính có thể thay đổi khi tổ chức thay đổi, nhưng liên hệ ban đầu nên vẫn được liên kết với lịch sử cơ hội

### 4.5 Quản lý Tham quan

#### 4.5.1 Khả năng Cốt lõi
- **Lên lịch tham quan**:
  - Liên kết với cơ hội (bắt buộc)
  - Ngày và giờ đã lên lịch
  - Thời lượng
  - Điểm gặp
  - Người tham dự từ tổ chức khách hàng tiềm năng
  - Thành viên đội ngũ IDICO (đại diện bán hàng, quản lý địa điểm, v.v.)
  - Các địa điểm/khu đất cụ thể để tham quan
  - Yêu cầu đặc biệt (PPE, vận chuyển, v.v.)

- **Chuẩn bị trước khi tham quan**:
  - Danh sách kiểm tra tài liệu cần chuẩn bị
  - Xác nhận tính khả dụng của địa điểm
  - Yêu cầu hướng dẫn an toàn
  - Tài liệu trình bày

- **Thực hiện tham quan**:
  - Theo dõi check-in/check-out
  - Ghi chú và quan sát chuyến tham quan
  - Tài liệu ảnh
  - Bảng đăng ký người tham dự
  - Thu thập phản hồi

- **Theo dõi sau chuyến tham quan**:
  - Báo cáo tóm tắt chuyến tham quan
  - Các hành động và bước tiếp theo
  - Phân tích phản hồi
  - Tạo tác vụ theo dõi tự động

#### 4.5.2 Quy tắc Nghiệp vụ
- Tham quan phải được liên kết với một cơ hội đang hoạt động
- Tham quan phải được lên lịch ít nhất 24 giờ trước
- Ít nhất một đại diện IDICO phải được chỉ định
- Bản tóm tắt chuyến tham quan phải được hoàn thành trong vòng 24 giờ sau chuyến tham quan
- Trạng thái cơ hội nên được cập nhật dựa trên kết quả chuyến tham quan

### 4.6 Quản lý Thỏa thuận MOU

#### 4.6.1 Khả năng Cốt lõi
- **Tạo MOU**:
  - Liên kết với cơ hội (bắt buộc)
  - **Tổ chức MOU** (bắt buộc) - tổ chức cụ thể ký MOU này (mặc định là tổ chức cơ hội hiện tại)
  - **Khóa tổ chức**: Khi MOU được tạo, tổ chức liên quan được khóa với tài liệu MOU này
  - Loại MOU (tiêu chuẩn, tùy chỉnh)
  - Chọn mẫu
  - Điều khoản chính:
    - **Các bên liên quan** (IDICO và tổ chức MOU)
    - Chi tiết khu đất
    - Thời hạn thuê
    - Điều khoản thuê
    - Lịch thanh toán
    - Điều kiện đặc biệt
  - Tạo bản thảo MOU với thông tin tổ chức được điền tự động

- **Quy trình MOU**:
  - Trạng thái bản thảo
  - Xem xét nội bộ (bán hàng, pháp lý, tài chính)
  - Quy trình phê duyệt
  - Theo dõi sửa đổi
  - Ghi chú đàm phán
  - Đối ứng

- **Quản lý tài liệu**:
  - Kiểm soát phiên bản
  - Chữ ký số
  - Kho tài liệu
  - Theo dõi hết hạn

- **Thực hiện MOU**:
  - Theo dõi chữ ký (cả hai bên)
  - Ngày thực hiện
  - Thời hạn hiệu lực
  - Điều kiện tiên quyết

#### 4.6.2 Quy tắc Nghiệp vụ
- MOU chỉ có thể được tạo cho các cơ hội ở giai đoạn Đề xuất hoặc Đàm phán
- **MOU được khóa với tổ chức được chỉ định tại thời điểm tạo** - tổ chức này không thể thay đổi sau khi MOU được tạo
- Nếu tổ chức cơ hội thay đổi sau khi tạo MOU, MOU vẫn được liên kết với tổ chức MOU ban đầu
- MOU yêu cầu phê duyệt của đội ngũ pháp lý trước khi gửi cho khách hàng tiềm năng
- Tất cả các sửa đổi MOU phải được theo dõi và ghi lại
- MOU phải có ngày hết hạn
- MOU đã thực hiện tự động tiến cơ hội lên giai đoạn Hợp đồng
- **Xử lý đa tổ chức**:
  - Nếu tổ chức cơ hội thay đổi trước khi tạo MOU, MOU sử dụng tổ chức mới
  - Nếu tổ chức cơ hội thay đổi sau khi MOU được thực hiện, hệ thống cảnh báo người dùng rằng Hợp đồng có thể với tổ chức khác
  - Hệ thống phải cho phép xem tổ chức nào đã ký MOU so với tổ chức nào hiện tại trên cơ hội
  - Nhiều MOU có thể tồn tại cho một cơ hội nếu tổ chức thay đổi giữa chừng (hiếm nhưng phải được hỗ trợ)

### 4.7 Quản lý Hợp đồng

#### 4.7.1 Khả năng Cốt lõi
- **Tạo hợp đồng**:
  - Liên kết với MOU và cơ hội (bắt buộc)
  - **Tổ chức hợp đồng** (bắt buộc) - tổ chức cụ thể ký hợp đồng cuối cùng
  - **Xác thực tổ chức**:
    - Nếu tổ chức hợp đồng khác với tổ chức MOU, hệ thống hiển thị cảnh báo
    - Hiển thị so sánh tổ chức: Tổ chức MOU so với Tổ chức Hợp đồng
    - Hiển thị mối quan hệ giữa các tổ chức (nếu tồn tại)
    - Yêu cầu phê duyệt bổ sung khi các tổ chức khác nhau
    - Yêu cầu tài liệu giải thích sự thay đổi
  - **Danh sách kiểm tra xác minh tổ chức**:
    - Xác nhận quyền pháp lý của tổ chức mới
    - Xác minh tài liệu đăng ký kinh doanh
    - Xác nhận mối quan hệ với tổ chức MOU (nếu có)
    - Ghi lại lý do thay đổi tổ chức
  - Loại hợp đồng (thỏa thuận cho thuê)
  - Điều khoản hợp đồng (kế thừa từ MOU, cho phép sửa đổi)
  - Điều khoản cuối cùng đã đàm phán:
    - **Các bên liên quan** (IDICO và tổ chức Hợp đồng)
    - Thời hạn thuê
    - Giá thuê
    - Điều khoản thanh toán
    - Tiền đặt cọc bảo mật
    - Trách nhiệm bảo trì
    - Điều khoản chấm dứt
    - Tùy chọn gia hạn

- **Quy trình hợp đồng**:
  - Chuẩn bị bản thảo
  - Phê duyệt nội bộ (pháp lý, tài chính, điều hành)
  - Xem xét và đàm phán bên ngoài
  - Phê duyệt cuối cùng
  - Thực hiện

- **Thực hiện hợp đồng**:
  - Thu thập chữ ký (số/vật lý)
  - Ngày thực hiện
  - Ngày có hiệu lực
  - Đăng ký hợp đồng
  - Bàn giao cho vận hành/tài chính

- **Kho hợp đồng**:
  - Lưu trữ tập trung
  - Tìm kiếm và truy xuất
  - Kiểm soát phiên bản
  - Cảnh báo gia hạn

#### 4.7.2 Quy tắc Nghiệp vụ
- Hợp đồng chỉ có thể được tạo từ MOU đã thực hiện
- **Tổ chức hợp đồng được khóa khi hợp đồng được tạo** - không thể thay đổi sau khi tạo
- Tất cả hợp đồng yêu cầu phê duyệt của ban điều hành trước khi thực hiện
- Điều khoản hợp đồng không thể lệch đáng kể so với MOU mà không có phê duyệt lại
- Hợp đồng đã thực hiện tự động đóng cơ hội là "Thắng"
- Dữ liệu hợp đồng tự động được đồng bộ với các module Tài chính và Vận hành
- **Xử lý kịch bản đa tổ chức**:
  - **Cùng tổ chức**: Nếu tổ chức hợp đồng khớp với tổ chức MOU, quy trình phê duyệt tiêu chuẩn áp dụng
  - **Tổ chức khác**: Nếu tổ chức hợp đồng khác với tổ chức MOU:
    - Hệ thống hiển thị cảnh báo nổi bật trong quá trình tạo hợp đồng
    - Yêu cầu phê duyệt điều hành/pháp lý (quyền cao hơn hợp đồng tiêu chuẩn)
    - Phải ghi lại lý do thay đổi tổ chức (menu thả xuống: Công ty Mẹ, Công ty Con, SPV, Tái cấu trúc Doanh nghiệp, Khác)
    - Phải tải lên tài liệu hỗ trợ (bằng chứng cấu trúc doanh nghiệp, thư ủy quyền, v.v.)
    - Quy trình phê duyệt mở rộng bao gồm xác minh pháp lý
    - Đội ngũ Tài chính phải được thông báo để thiết lập thanh toán
  - Hệ thống duy trì liên kết rõ ràng: Tổ chức Ban đầu → Tổ chức MOU → Tổ chức Hợp đồng
  - Lịch sử kiểm toán phải ghi lại đầy đủ lịch sử tổ chức từ khách hàng tiềm năng đến hợp đồng
  - Tổ chức hợp đồng trở thành "khách thuê" trong các hệ thống downstream (Tài chính, Vận hành)
- **Theo dõi quan hệ tổ chức**: Hệ thống nên tự động phát hiện và hiển thị nếu tổ chức hợp đồng có liên quan đến tổ chức MOU (công ty mẹ/con/anh em)

---

## 5. Tính năng & Khả năng Chính

### 5.1 Quản lý Pipeline
- **Phễu bán hàng trực quan**: Biểu diễn đồ họa các cơ hội theo giai đoạn
- **Dự báo pipeline**: Doanh thu dự đoán dựa trên giá trị cơ hội và xác suất
- **Phân tích thắng/thua**: Theo dõi và phân tích lý do giao dịch thắng hoặc thua
- **Chỉ số tốc độ bán hàng**: Đo thời gian ở mỗi giai đoạn

### 5.2 Quản lý Hoạt động & Tác vụ
- **Gán tác vụ**: Tạo và gán tác vụ cho thành viên nhóm
- **Ghi nhật ký hoạt động**: Ghi lại tất cả các tương tác với khách hàng (cuộc gọi, email, cuộc họp)
- **Nhắc nhở và thông báo**: Cảnh báo tự động cho việc theo dõi
- **Tích hợp lịch**: Đồng bộ với lịch của nhóm

### 5.3 Quản lý Tài liệu
- **Kho tập trung**: Lưu trữ tất cả tài liệu liên quan đến khách hàng
- **Mẫu tài liệu**: Mẫu xây dựng sẵn cho đề xuất, MOU, hợp đồng
- **Kiểm soát phiên bản**: Theo dõi các sửa đổi tài liệu
- **Kiểm soát truy cập**: Truy cập tài liệu dựa trên vai trò

### 5.4 Báo cáo & Phân tích
- **Báo cáo tiêu chuẩn**:
  - Báo cáo pipeline bán hàng
  - Phễu chuyển đổi khách hàng tiềm năng
  - Hiệu suất bán hàng theo đại diện
  - Báo cáo thắng/thua cơ hội
  - Thời gian chu kỳ giao dịch trung bình
  - Dự báo doanh thu
  - Báo cáo hoạt động
  - **Báo cáo thay đổi tổ chức**: Theo dõi các cơ hội có thay đổi tổ chức trong quá trình bán hàng
  - **Báo cáo phương sai tổ chức MOU vs Hợp đồng**: Xác định và phân tích các trường hợp tổ chức MOU và Hợp đồng khác nhau

- **Báo cáo tùy chỉnh**: Trình tạo báo cáo tùy chỉnh
- **Bảng điều khiển**: Bảng điều khiển dựa trên vai trò với các chỉ số chính
- **Khả năng xuất**: Xuất dữ liệu sang Excel, PDF

### 5.5 Tìm kiếm & Lọc
- **Tìm kiếm toàn cục**: Tìm kiếm trên các liên hệ, tổ chức, khách hàng tiềm năng, cơ hội
- **Lọc nâng cao**: Lọc đa tiêu chí cho tất cả các thực thể
- **Bộ lọc đã lưu**: Lưu các tổ hợp bộ lọc thường dùng
- **Chế độ xem nhanh**: Chế độ xem được xác định trước cho các kịch bản phổ biến

### 5.6 Tự động hóa & Quy trình
- **Gán khách hàng tiềm năng tự động**: Phân phối khách hàng tiềm năng theo vòng tròn hoặc dựa trên quy tắc
- **Tự động hóa tiến triển giai đoạn**: Cập nhật trạng thái tự động dựa trên trigger
- **Tự động hóa email**: Chiến dịch email tự động và theo dõi
- **Quy trình phê duyệt**: Quy trình phê duyệt có thể cấu hình cho MOU và hợp đồng
- **Quy tắc thông báo**: Cảnh báo tự động dựa trên sự kiện

### 5.7 Cộng tác
- **Ghi chú nội bộ**: Nhận xét chỉ dành cho nhóm trên các bản ghi
- **@đề cập**: Gắn thẻ thành viên nhóm trong thảo luận
- **Luồng hoạt động**: Cập nhật thời gian thực về thay đổi bản ghi
- **Lịch chia sẻ**: Khả năng hiển thị lịch trình của nhóm

### 5.8 Truy cập Di động
- **Thiết kế responsive**: Truy cập CRM từ thiết bị di động
- **Khả năng offline**: Chức năng cơ bản không cần internet
- **Quy trình làm việc được tối ưu hóa cho di động**: Quy trình được đơn giản hóa để sử dụng khi di chuyển

---

## 6. Vai trò Người dùng & Quyền hạn

### 6.1 Định nghĩa Vai trò

**Đại diện Bán hàng**
- Tạo và quản lý liên hệ, tổ chức, khách hàng tiềm năng, cơ hội
- Lên lịch tham quan
- Tạo và theo dõi hoạt động
- Tạo đề xuất
- Xem các bản ghi được chỉ định và bản ghi nhóm
- Cập nhật giai đoạn cơ hội

**Quản lý Bán hàng**
- Tất cả quyền của Đại diện Bán hàng
- Xem và quản lý toàn bộ pipeline bán hàng
- Phân công lại khách hàng tiềm năng và cơ hội
- Phê duyệt đề xuất
- Truy cập tất cả báo cáo và bảng điều khiển
- Cấu hình quy trình bán hàng

**Đội ngũ Pháp lý**
- Xem cơ hội ở giai đoạn MOU/Hợp đồng
- Xem xét và phê duyệt MOU và hợp đồng
- Chỉnh sửa điều khoản hợp đồng
- Tải lên tài liệu pháp lý
- Theo dõi trạng thái hợp đồng

**Đội ngũ Vận hành**
- Xem lịch tham quan
- Điều phối tham quan
- Cập nhật bản ghi tham quan
- Xem chi tiết cơ hội

**Đội ngũ Tài chính**
- Xem cơ hội với chi tiết tài chính
- Phê duyệt giá cả và điều khoản thanh toán
- Xem xét MOU và hợp đồng
- Truy cập báo cáo tài chính

**Ban Giám đốc**
- Truy cập chỉ xem tất cả các bản ghi
- Truy cập tất cả báo cáo và bảng điều khiển
- Tổng quan pipeline cấp cao
- Phê duyệt hợp đồng lớn

**Quản trị Hệ thống**
- Truy cập đầy đủ hệ thống
- Quản lý người dùng
- Cấu hình và tùy chỉnh
- Nhập/xuất dữ liệu
- Bảo trì hệ thống

### 6.2 Mô hình Quyền hạn
- **Bảo mật cấp bản ghi**: Người dùng chỉ có thể truy cập các bản ghi họ sở hữu hoặc được chỉ định (trừ khi vai trò cao hơn)
- **Bảo mật cấp trường**: Các trường nhạy cảm (ví dụ: giá cả) bị hạn chế đối với các vai trò được ủy quyền
- **Quy tắc chia sẻ**: Khả năng chia sẻ các bản ghi cụ thể với người dùng/nhóm khác
- **Phân cấp phê duyệt**: Chuỗi phê duyệt có thể cấu hình dựa trên giá trị giao dịch

---

## 7. Yêu cầu Tích hợp

### 7.1 Tích hợp Cổng thông tin Khách hàng
- Đồng bộ thông tin khách hàng giữa CRM và Cổng thông tin Khách hàng
- Cho phép khách hàng gửi yêu cầu để tạo khách hàng tiềm năng
- Cho phép khách hàng xem trạng thái cơ hội của họ
- Chia sẻ tài liệu giữa các hệ thống

### 7.2 Module Tài chính/Kế toán
- Chuyển dữ liệu hợp đồng sang tài chính để thanh toán
- Đồng bộ giá cả và điều khoản thanh toán
- Cập nhật trạng thái thanh toán từ tài chính sang CRM
- Ghi nhận doanh thu

### 7.3 Module Vận hành
- Bàn giao thông tin khách thuê sau hợp đồng
- Đồng bộ tính khả dụng của khu đất
- Cập nhật logistics tham quan

### 7.4 Hệ thống Quản lý Tài liệu
- Lưu trữ và truy xuất tài liệu từ kho tập trung
- Tích hợp kiểm soát phiên bản
- Tích hợp chữ ký điện tử

### 7.5 Hệ thống Email
- Theo dõi và ghi nhật ký email
- Mẫu email
- Chiến dịch email hàng loạt
- Email-to-case cho yêu cầu đến

### 7.6 Hệ thống Lịch
- Đồng bộ tham quan và cuộc họp vào lịch nhóm
- Tích hợp đặt phòng họp

---

## 8. Yêu cầu Phi Chức năng

### 8.1 Hiệu suất
- Thời gian tải trang < 2 giây cho chế độ xem tiêu chuẩn
- Kết quả tìm kiếm được trả về trong vòng 1 giây
- Hỗ trợ ít nhất 100 người dùng đồng thời
- Tối ưu hóa cơ sở dữ liệu cho tập dữ liệu lớn (100.000+ bản ghi)

### 8.2 Bảo mật
- Kiểm soát truy cập dựa trên vai trò (RBAC)
- Mã hóa dữ liệu khi lưu trữ và khi truyền tải
- Lịch sử kiểm toán cho tất cả thay đổi dữ liệu
- Xác thực an toàn (hỗ trợ SSO)
- Thời gian chờ phiên sau khi không hoạt động
- Whitelist IP cho truy cập quản trị

### 8.3 Khả năng Mở rộng
- Kiến trúc nên hỗ trợ cơ sở người dùng ngày càng tăng
- Thiết kế mô-đun cho các tính năng bổ sung trong tương lai
- Thiết kế API-first cho tích hợp

### 8.4 Khả năng Sử dụng
- Giao diện người dùng trực quan
- Số lần nhấp tối thiểu để hoàn thành các tác vụ phổ biến
- Khả năng chỉnh sửa nội tuyến
- Thiết kế responsive cho tất cả kích thước màn hình
- UI/UX nhất quán với các module ERP khác

### 8.5 Độ tin cậy
- Thời gian hoạt động hệ thống 99,5%
- Sao lưu tự động (hàng ngày)
- Kế hoạch khắc phục thảm họa
- Dự phòng dữ liệu

### 8.6 Tuân thủ
- Tuân thủ GDPR cho quyền riêng tư dữ liệu
- Quy định bảo vệ dữ liệu địa phương
- Lịch sử kiểm toán cho yêu cầu quy định
- Chính sách lưu giữ dữ liệu

### 8.7 Kiểm toán & Theo dõi
- Lịch sử kiểm toán đầy đủ tất cả thay đổi bản ghi
- Ghi nhật ký hành động người dùng
- Ghi nhật ký truy cập dữ liệu
- Bảo tồn dữ liệu lịch sử

---

## 9. Di chuyển & Nhập Dữ liệu

### 9.1 Di chuyển Dữ liệu Ban đầu
- Nhập các liên hệ hiện có từ bảng tính/cơ sở dữ liệu
- Nhập khách hàng tiềm năng và cơ hội lịch sử
- Nhập hợp đồng hiện có
- Làm sạch và loại bỏ trùng lặp dữ liệu

### 9.2 Nhập Liên tục
- Khả năng nhập hàng loạt cho liên hệ và tổ chức
- Xác thực và xử lý lỗi nhập
- Nhập dựa trên mẫu để nhất quán

---

## 10. Chỉ số Thành công & KPI

### 10.1 Chỉ số Chấp nhận
- Tần suất đăng nhập của người dùng
- Tỷ lệ sử dụng tính năng
- Điểm chất lượng dữ liệu (bản ghi đầy đủ)
- Thời gian dành cho hệ thống

### 10.2 Chỉ số Kinh doanh
- Tỷ lệ chuyển đổi từ khách hàng tiềm năng sang cơ hội
- Tỷ lệ chuyển đổi từ cơ hội sang hợp đồng
- Thời gian chu kỳ bán hàng trung bình (ngày từ khách hàng tiềm năng đến hợp đồng)
- Giá trị và độ chính xác của pipeline
- Tỷ lệ thắng giao dịch
- Độ chính xác dự báo doanh thu
- Chi phí thu hút khách hàng

### 10.3 Chỉ số Hiệu quả
- Thời gian để tạo và gửi đề xuất
- Thời gian để thực hiện MOU
- Số lần tham quan trên mỗi giao dịch đóng
- Giảm thời gian quản lý

---

## 11. Giả định & Ràng buộc

### 11.1 Giả định
- Người dùng có kiến thức cơ bản về máy tính
- Kết nối internet ổn định cho truy cập dựa trên đám mây
- Các quy trình tổ chức hiện có có thể được điều chỉnh theo quy trình làm việc của hệ thống
- Các module Tài chính và Vận hành sẽ được phát triển hoặc tồn tại riêng biệt

### 11.2 Ràng buộc
- Hệ thống phải tích hợp với cơ sở hạ tầng IDICO hiện có
- Thời gian phát triển phù hợp với việc triển khai ERP tổng thể
- Hạn chế ngân sách có thể ưu tiên một số tính năng theo giai đoạn
- Tuân thủ các chính sách CNTT hiện có của IDICO

---

## 12. Cải tiến Tương lai (Ngoài Phạm vi Giai đoạn 1)

- Chấm điểm khách hàng tiềm năng và đề xuất được hỗ trợ bởi AI
- Phân tích dự đoán cho xác suất đóng giao dịch
- Tự động hóa marketing nâng cao
- Khảo sát mức độ hài lòng của khách hàng và theo dõi NPS
- Tích hợp với hệ thống GIS/bản đồ để trực quan hóa khu đất
- Ứng dụng di động (iOS/Android bản địa)
- Tích hợp WhatsApp/SMS
- Quản lý lãnh thổ nâng cao
- Tính toán và theo dõi hoa hồng

---

## 13. Thuật ngữ

| Thuật ngữ | Định nghĩa |
|-----------|------------|
| **Liên hệ (Contact)** | Một cá nhân đại diện hoặc liên kết với một tổ chức khách thuê tiềm năng |
| **Tổ chức (Organization)** | Một thực thể kinh doanh có thể thuê không gian trong khu công nghiệp |
| **Khách hàng tiềm năng (Lead)** | Một khách thuê tiềm năng đủ điều kiện đã bày tỏ sự quan tâm |
| **Cơ hội (Opportunity)** | Một giao dịch cho thuê cụ thể với các yêu cầu được xác định |
| **Tham quan (Site Visit)** | Một chuyến tham quan theo lịch các cơ sở khu công nghiệp |
| **MOU** | Biên bản Ghi nhớ - thỏa thuận sơ bộ trước hợp đồng cuối cùng |
| **Hợp đồng (Contract)** | Thỏa thuận cho thuê cuối cùng đã thực hiện |
| **Pipeline** | Tập hợp tất cả các cơ hội ở các giai đoạn khác nhau |
| **Tỷ lệ Chuyển đổi (Conversion Rate)** | Tỷ lệ phần trăm bản ghi tiến từ giai đoạn này sang giai đoạn tiếp theo |
| **Chu kỳ Bán hàng (Sales Cycle)** | Tổng thời gian từ liên hệ ban đầu đến hợp đồng đã ký |
| **Tỷ lệ Thắng (Win Rate)** | Tỷ lệ phần trăm cơ hội dẫn đến hợp đồng đã ký |
| **Kịch bản Đa Tổ chức (Multi-Organization Scenario)** | Tình huống kinh doanh mà các tổ chức khác nhau tham gia vào các giai đoạn khác nhau của quá trình bán hàng (ví dụ: Công ty A bắt đầu yêu cầu nhưng Công ty B ký hợp đồng cuối cùng) |
| **Tổ chức Ban đầu (Initial Organization)** | Tổ chức được liên kết với một cơ hội khi nó được tạo lần đầu |
| **Tổ chức Hiện tại (Current Organization)** | Tổ chức đang hoạt động hiện được liên kết với một cơ hội |
| **Tổ chức MOU (MOU Organization)** | Tổ chức cụ thể đã ký tài liệu MOU |
| **Tổ chức Hợp đồng (Contract Organization)** | Tổ chức cụ thể ký hợp đồng cho thuê cuối cùng |
| **SPV (Special Purpose Vehicle)** | Một thực thể pháp lý được tạo ra đặc biệt cho một mục đích kinh doanh cụ thể, chẳng hạn như ký hợp đồng thuê |
| **Tổ chức Liên quan (Related Organizations)** | Các tổ chức được kết nối thông qua quan hệ công ty mẹ/con, công ty anh em hoặc các quan hệ doanh nghiệp khác |

---

## 14. Phê duyệt & Ký kết

| Vai trò | Tên | Chữ ký | Ngày |
|---------|-----|--------|------|
| Chủ sở hữu Nghiệp vụ | | | |
| Quản lý Bán hàng | | | |
| Quản lý CNTT | | | |
| Quản lý Dự án | | | |

---

**Phiên bản Tài liệu**: 1.1
**Cập nhật Lần cuối**: 2026-01-03
**Ngày Xem xét Tiếp theo**: Sẽ được xác định

**Nhật ký Thay đổi**:
- v1.1 (2026-01-03): Thêm hỗ trợ kịch bản đa tổ chức toàn diện trên tất cả các module
- v1.0 (2026-01-02): Tạo tài liệu ban đầu
